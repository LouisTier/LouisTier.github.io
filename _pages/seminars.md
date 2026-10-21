---
layout: page
title: "Seminars"
permalink: /seminars/
description: My seminar presentations and paper discussions.
seo_description: "A Paper A Week, the research seminar Louis Berthier founded at Michelin, and paper talks on conformal prediction, self-organizing maps and transformers."
nav: false
---

Reading and debating research is central to how I work. This page gathers the seminar I founded at Michelin, a selection of papers I have presented there, and talks I have been invited to give.

## A Research Seminar I Founded

<div class="card lb-event mt-3">
    <div class="card-body">
        <h3 class="card-title">A Paper A Week (APAW)</h3>
        <p class="card-text">
            I founded and led a bi-monthly research seminar that brought together 20+ researchers and data scientists across Michelin.  
            Each session dove into a single paper or topic, from conformal prediction and Self-Organizing Maps to long-range sequence models and the transformer architecture, always bridging the latest academic ideas and the industrial problems we faced daily.  
            The goal was simple: keep learning together and spot opportunities to bring cutting-edge research into production.
        </p>
        <p class="text-muted small mb-0">
            April 2024 to January 2026 · Clermont-Ferrand · Bi-monthly · 20+ Researchers and Data Scientists
        </p>
    </div>
</div>

### Selected Paper Presentations
{: .mt-4 }

A sample of the papers I have presented at A Paper A Week, chosen for how they connect frontier research to the problems we face in industry.

<div class="lb-topics">

<h4 class="lb-fold-title" id="apaw-torchsom"><button type="button" aria-expanded="false" aria-controls="fold-apaw-torchsom"><span>TorchSOM: PyTorch Library for Self-Organizing Maps</span></button></h4>
<p class="lb-fold-meta">GitHub · Unsupervised Learning, Dimensionality Reduction</p>

<div class="lb-fold-body" id="fold-apaw-torchsom" hidden="until-found">
    <p>
        Presented my own open-source library for Self-Organizing Maps in PyTorch, showing how SOMs can power industrial data visualization, anomaly detection, and similarity-based retrieval at scale.
    </p>
    <div class="lb-research-links">
        <a class="btn btn-sm z-depth-0" href="https://github.com/michelin/TorchSOM" role="button">Code</a>
    </div>
</div>

<h4 class="lb-fold-title" id="apaw-hyenadna"><button type="button" aria-expanded="false" aria-controls="fold-apaw-hyenadna"><span>HyenaDNA: Long-Range Genomic Sequence Modeling</span></button></h4>
<p class="lb-fold-meta">arXiv (2023) · Sequence Modeling, Genomics, BioAI</p>

<div class="lb-fold-body" id="fold-apaw-hyenadna" hidden="until-found">
    <p>
        A sub-quadratic alternative to transformers for extremely long sequences (up to 1M tokens).  
        I presented this for its potential connections to industrial time-series modeling where sequences can span thousands of process steps.
    </p>
    <div class="lb-research-links">
        <a class="btn btn-sm z-depth-0" href="https://arxiv.org/abs/2306.15794" role="button">Paper</a>
    </div>
</div>

<h4 class="lb-fold-title" id="apaw-conformal-prediction"><button type="button" aria-expanded="false" aria-controls="fold-apaw-conformal"><span>A Gentle Introduction to Conformal Prediction</span></button></h4>
<p class="lb-fold-meta">arXiv (2021) · Uncertainty Quantification</p>

<div class="lb-fold-body" id="fold-apaw-conformal" hidden="until-found">
    <p>
        An accessible introduction to conformal prediction, a framework for producing prediction intervals with finite-sample coverage guarantees.  
        Directly relevant to my PhD work on uncertainty quantification for industrial quality monitoring.
    </p>
    <div class="lb-research-links">
        <a class="btn btn-sm z-depth-0" href="https://arxiv.org/abs/2107.07511" role="button">Paper</a>
    </div>
</div>

<h4 class="lb-fold-title" id="apaw-quality-diversity"><button type="button" aria-expanded="false" aria-controls="fold-apaw-qd"><span>Quality-Diversity Optimization: a novel branch of stochastic optimization</span></button></h4>
<p class="lb-fold-meta">arXiv (2020) · Evolutionary Algorithms, Optimization</p>

<div class="lb-fold-body" id="fold-apaw-qd" hidden="until-found">
    <p>
        An overview of QD algorithms, which find not one but an entire repertoire of diverse, high-performing solutions.  
        I presented this from my MSc experience at Imperial College, discussing potential applications to process optimization.
    </p>
    <div class="lb-research-links">
        <a class="btn btn-sm z-depth-0" href="https://arxiv.org/abs/2012.04322" role="button">Paper</a>
    </div>
</div>

<h4 class="lb-fold-title" id="apaw-attention"><button type="button" aria-expanded="false" aria-controls="fold-apaw-attention"><span>Attention Is All You Need</span></button></h4>
<p class="lb-fold-meta">NeurIPS (2017) · Deep Learning, Transformers</p>

<div class="lb-fold-body" id="fold-apaw-attention" hidden="until-found">
    <p>
        The foundational paper behind modern language models, vision transformers, and much of today's AI.  
        I discussed the self-attention mechanism and its implications for sequential industrial data, foundational background for most of modern deep learning.
    </p>
    <div class="lb-research-links">
        <a class="btn btn-sm z-depth-0" href="https://arxiv.org/abs/1706.03762" role="button">Paper</a>
    </div>
</div>

</div>

## Invited Seminars

Talks I was invited to give to research and data-science audiences.

<div class="lb-topics">

<h3 class="lb-fold-title" id="seminar-lix-2026"><button type="button" aria-expanded="false" aria-controls="fold-seminar-lix"><span>Wiring the Fly Brain into a World Model</span></button></h3>
<p class="lb-fold-meta">ORAILIX team, <a href="https://www.lix.polytechnique.fr/">Computer Science Laboratory (LIX)</a>, École Polytechnique · July 2026</p>

<div class="lb-fold-body" id="fold-seminar-lix" hidden="until-found">
    <p>
        After our 2nd place at Hack the World(s), the ORAILIX team of LIX, where my teammate <a href="https://www.linkedin.com/in/lucas-andrei-thil/">Lucas Thil</a> is a PhD student, invited team Piaget to present the project.  
        We shared the motivation behind a JEPA world model built on a complete fly-brain connectome, the technical challenges we tackled, such as the 96% neural silence that pushes JEPA toward collapse, and the results we obtained.
    </p>
    <div class="lb-research-links">
        <a class="btn btn-sm z-depth-0" href="/projects/3_hack_the_worlds/" role="button">Project</a>
        <a class="btn btn-sm z-depth-0" href="https://hal.science/hal-05674559" role="button">Working paper</a>
    </div>
</div>

<h3 class="lb-fold-title" id="seminar-torchsom-2025"><button type="button" aria-expanded="false" aria-controls="fold-seminar-torchsom"><span>TorchSOM: Applications to Online Sensing and Uncertainty Quantification</span></button></h3>
<p class="lb-fold-meta">Mathematical PhD Seminar, École Polytechnique · October 2025</p>

<div class="lb-fold-body" id="fold-seminar-torchsom" hidden="until-found">
    <p>
        Presented TorchSOM to the mathematical PhD community at Polytechnique, covering the library's design, its role as a backbone for Just-in-Time Learning, and applications to online quality sensing and conformal prediction in industrial settings.
    </p>
    <div class="lb-research-links">
        <a class="btn btn-sm z-depth-0" href="https://github.com/michelin/TorchSOM" role="button">Code</a>
    </div>
</div>

<h3 class="lb-fold-title" id="seminar-michelin-2025"><button type="button" aria-expanded="false" aria-controls="fold-seminar-michelin"><span>Online Sensing for Quality Monitoring</span></button></h3>
<p class="lb-fold-meta">Data Scientists Network, Michelin · July 2025</p>

<div class="lb-fold-body" id="fold-seminar-michelin" hidden="until-found">
    <p>
        Presented my work on adaptive soft sensing to Michelin's Data Scientists Network, comparing temporal, similarity-based, and hybrid strategies for real-time quality monitoring on the production line.
    </p>
</div>

</div>
