# jroc-hf-local

[![CI](https://img.shields.io/github/actions/workflow/status/your-org/jroc-hf-local/ci.yml?branch=main)](../../actions)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Python](https://img.shields.io/badge/python-3.10+-blue.svg)
![Docker](https://img.shields.io/badge/docker-ready-success.svg)

Local Hugging Face free‑tier model stack for JROC: FastAPI inference server, Docker, PowerShell helpers, and telemetry hooks.

---

## Features

- Local FastAPI server wrapping Hugging Face text‑generation models.
- Free‑tier model registry (GPT‑J, RedPajama, Phi, MPT, BLOOM, OASST, OPT).
- Dockerfile + `docker-compose` for quick spin‑up.
- PowerShell scripts for Windows (`start_local_models.ps1`, `set_env.ps1`, `test_hf_workflow.ps1`).
- Telemetry hook for Postgres (and extendable to ClickHouse).
- Example TypeScript workflow hitting the local endpoint.

---

## Quick start

```bash
# clone
git clone https://github.com/your-org/jroc-hf-local.git
cd jroc-hf-local

# install Python deps (optional if using Docker only)
pip install -r requirements.txt

# start via Docker
docker-compose -f docker-compose.hf.yml up -d --build
