import { LLMModel } from './ModelTypes';

export const HF_MODEL_REGISTRY: LLMModel[] = [
  {
    id: 'local-hf-gptj-6b',
    name: 'Local GPT-J 6B',
    provider: 'local-hf',
    hf_repo: 'EleutherAI/gpt-j-6B',
    contextTokens: 65000,
    maxOutputTokens: 2048,
    capabilities: ['reasoning','role_execution','workflow_obedience'],
    modalities: ['text'],
    isFreeTier: true,
    isLocal: true
  },
  {
    id: 'local-redpajama-7b',
    name: 'Local RedPajama INCITE 7B',
    provider: 'local-hf',
    hf_repo: 'togethercomputer/RedPajama-INCITE-7B-v1',
    contextTokens: 65000,
    maxOutputTokens: 2048,
    capabilities: ['reasoning','role_execution'],
    modalities: ['text'],
    isFreeTier: true,
    isLocal: true
  },
  {
    id: 'local-redpajama-3b',
    name: 'Local RedPajama INCITE 3B',
    provider: 'local-hf',
    hf_repo: 'togethercomputer/RedPajama-INCITE-3B-v1',
    contextTokens: 65000,
    maxOutputTokens: 1024,
    capabilities: ['role_execution','workflow_obedience'],
    modalities: ['text'],
    isFreeTier: true,
    isLocal: true
  },
  {
    id: 'local-phi-1.4b',
    name: 'Local Phi 1.4B',
    provider: 'local-hf',
    hf_repo: 'TheBloke/phi-3-mini-1.4B',
    contextTokens: 32000,
    maxOutputTokens: 1024,
    capabilities: ['role_execution','workflow_obedience'],
    modalities: ['text'],
    isFreeTier: true,
    isLocal: true
  },
  {
    id: 'local-mpt-7b-instruct',
    name: 'Local MPT 7B Instruct',
    provider: 'local-hf',
    hf_repo: 'mosaicml/mpt-7b-instruct',
    contextTokens: 65000,
    maxOutputTokens: 2048,
    capabilities: ['structured_output','policy_review'],
    modalities: ['text'],
    isFreeTier: true,
    isLocal: true
  },
  {
    id: 'local-bloom-3b',
    name: 'Local BLOOM 3B',
    provider: 'local-hf',
    hf_repo: 'bigscience/bloom-3b',
    contextTokens: 65000,
    maxOutputTokens: 2048,
    capabilities: ['multilingual','reasoning'],
    modalities: ['text'],
    isFreeTier: true,
    isLocal: true
  },
  {
    id: 'local-oasst-7b',
    name: 'Local OASST 7B',
    provider: 'local-hf',
    hf_repo: 'OpenAssistant/research-oasst-model-7b-hf',
    contextTokens: 65000,
    maxOutputTokens: 2048,
    capabilities: ['assistant','role_execution'],
    modalities: ['text'],
    isFreeTier: true,
    isLocal: true
  },
  {
    id: 'local-opt-6.7b',
    name: 'Local OPT 6.7B',
    provider: 'local-hf',
    hf_repo: 'facebook/opt-6.7b',
    contextTokens: 65000,
    maxOutputTokens: 2048,
    capabilities: ['causal','deterministic'],
    modalities: ['text'],
    isFreeTier: true,
    isLocal: true
  }
];
