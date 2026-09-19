import fetch from 'node-fetch';
import { LLMModel } from '../models/ModelTypes';
import { HF_MODEL_REGISTRY } from '../models/ModelRegistry.hf';

export async function callLLM(model: LLMModel, prompt: string) {
  if (model.provider === 'local-hf') return { output: await callLocalHF(model, prompt) };
  if (model.provider === 'huggingface') return { output: await callHuggingFace(model, prompt) };

  const fallback = HF_MODEL_REGISTRY.find(m => m.isLocal);
  return { output: await callLocalHF(fallback, prompt) };
}

async function callHuggingFace(model: LLMModel, prompt: string) {
  const apiKey = process.env.HF_API_KEY;
  const repo = model.hf_repo;
  const url = `https://api-inference.huggingface.co/models/${repo}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ inputs: prompt })
  });

  const json = await res.json();
  return json[0]?.generated_text || json.generated_text || JSON.stringify(json);
}

async function callLocalHF(model: LLMModel, prompt: string) {
  const url = process.env.LOCAL_HF_URL || 'http://localhost:8000/generate';

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': process.env.LOCAL_HF_API_KEY ?? '' },
    body: JSON.stringify({ model: model.hf_repo, prompt })
  });

  const json = await res.json();
  return json.output;
}
