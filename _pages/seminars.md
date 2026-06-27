---
layout: page
title: "Seminars"
permalink: /seminars/
description: My seminar presentations and paper discussions.
nav: false
---

Reading and debating research is central to how I work. This page gathers the seminar I founded at Michelin, a selection of papers I have presented there, and talks I have been invited to give.

## A Research Seminar I Founded

<div class="row justify-content-sm-center mt-3">
    <div class="col-md-10 mt-3 mt-md-0">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title mb-3">A Paper A Week (APAW)</h5>
                <p class="card-text">
                    I founded and organize a bi-monthly research seminar that brings together researchers and data scientists across Michelin.  
                    Each session dives into a single paper or topic, recent ones ranging from conformal prediction and Self-Organizing Maps to long-range sequence models and the transformer architecture, always bridging the latest academic ideas and the industrial problems we face daily.  
                    The goal is simple: keep learning together and spot opportunities to bring cutting-edge research into production.
                </p>
                <p class="text-muted small mb-2">
                    April 2024 to Present · Clermont-Ferrand · Bi-monthly · Researchers and Data Scientists
                </p>
            </div>
        </div>
    </div>
</div>

### Selected Paper Presentations
{: .mt-4 }

A sample of the papers I have presented at A Paper A Week, chosen for how they connect frontier research to the problems we face in industry.

<div class="row mt-3">
    <div class="col-md-6 mb-3">
        <div class="card h-100">
            <div class="card-body">
                <h6 class="card-title">TorchSOM: PyTorch Library for Self-Organizing Maps</h6>
                <p class="text-muted small mb-2">GitHub · Unsupervised Learning, Dimensionality Reduction</p>
                <p class="card-text small">
                    Presented my own open-source library for Self-Organizing Maps in PyTorch, showing how SOMs can power industrial data visualization, anomaly detection, and similarity-based retrieval at scale.
                </p>
                <a href="https://github.com/michelin/TorchSOM" class="btn btn-sm btn-outline-secondary" target="_blank">💻 GitHub</a>
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-3">
        <div class="card h-100">
            <div class="card-body">
                <h6 class="card-title">HyenaDNA: Long-Range Genomic Sequence Modeling</h6>
                <p class="text-muted small mb-2">arXiv (2023) · Sequence Modeling, Genomics, BioAI</p>
                <p class="card-text small">
                    A sub-quadratic alternative to transformers for extremely long sequences (up to 1M tokens).  
                    I presented this for its potential connections to industrial time-series modeling where sequences can span thousands of process steps.
                </p>
                <a href="https://arxiv.org/abs/2306.15794" class="btn btn-sm btn-outline-secondary" target="_blank">📄 Paper</a>
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-3">
        <div class="card h-100">
            <div class="card-body">
                <h6 class="card-title">A Gentle Introduction to Conformal Prediction</h6>
                <p class="text-muted small mb-2">arXiv (2021) · Uncertainty Quantification</p>
                <p class="card-text small">
                    An accessible introduction to conformal prediction, a framework for producing prediction intervals with finite-sample coverage guarantees.  
                    Directly relevant to my PhD work on uncertainty quantification for industrial quality monitoring.
                </p>
                <a href="https://arxiv.org/abs/2107.07511" class="btn btn-sm btn-outline-secondary" target="_blank">📄 Paper</a>
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-3">
        <div class="card h-100">
            <div class="card-body">
                <h6 class="card-title">Quality-Diversity Optimization: a novel branch of stochastic optimization</h6>
                <p class="text-muted small mb-2">arXiv (2020) · Evolutionary Algorithms, Optimization</p>
                <p class="card-text small">
                    An overview of QD algorithms, which find not one but an entire repertoire of diverse, high-performing solutions.  
                    I presented this from my MSc experience at Imperial College, discussing potential applications to process optimization.
                </p>
                <a href="https://arxiv.org/abs/2012.04322" class="btn btn-sm btn-outline-secondary" target="_blank">📄 Paper</a>
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-3">
        <div class="card h-100">
            <div class="card-body">
                <h6 class="card-title">Attention Is All You Need</h6>
                <p class="text-muted small mb-2">NeurIPS (2017) · Deep Learning, Transformers</p>
                <p class="card-text small">
                    The foundational paper behind modern language models, vision transformers, and much of today's AI.  
                    I discussed the self-attention mechanism and its implications for sequential industrial data, foundational background for most of modern deep learning.
                </p>
                <a href="https://arxiv.org/abs/1706.03762" class="btn btn-sm btn-outline-secondary" target="_blank">📄 Paper</a>
            </div>
        </div>
    </div>
</div>

---

## Invited Seminars

Talks I was invited to give to research and data-science audiences.

<div class="row mt-3">
    <div class="col-md-6 mb-3">
        <div class="card h-100">
            <div class="card-body">
                <h6 class="card-title">TorchSOM: Applications to Online Sensing and Uncertainty Quantification</h6>
                <p class="text-muted small mb-2">
                    October 2025 · Mathematical PhD Seminar, École Polytechnique
                </p>
                <p class="card-text small">
                    Presented TorchSOM to the mathematical PhD community at Polytechnique, covering the library's design, its role as a backbone for Just-in-Time Learning, and applications to online quality sensing and conformal prediction in industrial settings.
                </p>
                <a href="https://github.com/michelin/TorchSOM" class="btn btn-sm btn-outline-secondary" target="_blank">💻 GitHub</a>
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-3">
        <div class="card h-100">
            <div class="card-body">
                <h6 class="card-title">Online Sensing for Quality Monitoring</h6>
                <p class="text-muted small mb-2">
                    July 2025 · Data Scientists Network, Michelin
                </p>
                <p class="card-text small">
                    Presented my work on adaptive soft sensing to Michelin's Data Scientists Network, comparing temporal, similarity-based, and hybrid strategies for real-time quality monitoring on the production line.
                </p>
            </div>
        </div>
    </div>
</div>
