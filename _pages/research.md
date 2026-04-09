---
layout: page
title: "Research"
permalink: /research/
description: Applied mathematics and machine learning for industrial systems.
nav: true
nav_order: 1
---

My research develops machine learning methods that are not only accurate but also *know when they might be wrong*, a critical property for deployment in high-stakes industrial environments.
I currently work with [Michelin](https://www.michelin.com/) and [Augmodo](https://www.augmodo.com/), applying uncertainty-aware ML to manufacturing and retail.

---

## Current Research

### Personal Exploration: Diffusion Models

Outside my PhD, I explore topics that spark my curiosity. I am currently looking into diffusion models and their potential for live video generation and industrial simulation, as part of an entrepreneurial project bridging generative AI with practical applications.

---

### Research at [Augmodo](https://www.augmodo.com/)

<div class="row justify-content-sm-center mt-3 mb-3">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/research/augmodo_logo.png" title="Augmodo Logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

#### Inference-Time Uncertainty Quantification

As a Computer Vision Scientist at [Augmodo](https://www.augmodo.com/), I develop uncertainty-aware vision models for open-world retail environments — settings where the camera encounters products, lighting conditions, and edge cases never seen during training.
I work alongside [Sacha Hu](https://www.sachahu.com/) (Senior CV Engineer), [Ashley Napier](https://www.linkedin.com/in/ashleyanapier/) (CV Group Lead), and [Shubham Wagh](https://www.linkedin.com/in/shubhamwagh/) (Senior CV Engineer) on pipelines that process millions of images daily. My contributions include:

- **Uncertainty-aware quality control**: building open-world classifiers for product identification across tens of thousands of retail shelf images, using test-time augmentation to quantify prediction confidence and reduce manual QC workload by selectively accepting only high-confidence predictions
- **Empty shelf area flagging**: an RGB+depth classification pipeline that identifies truly empty shelf areas, enabling QC teams to focus human review on genuinely uncertain cases
- **Low-cost dataset relabeling**: leveraging improved object detectors to update legacy bounding box annotations at scale, adapting existing large datasets to newer models without costly manual re-annotation

---

### Research at [Michelin](https://www.michelin.com/)

<div class="row justify-content-sm-center mt-3 mb-3">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/research/michelin_logo.png" title="Michelin Logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

My PhD at the [Centre de Mathematiques Appliquees (CMAP)](https://cmap.ip-paris.fr/) - [Ecole Polytechnique](https://www.polytechnique.edu/) - in collaboration with [Michelin](https://www.michelin.com/), focuses on predicting rubber quality in real time, directly on the production line. Here are the three pillars of this work:

#### Adaptive Soft Sensing

In tire manufacturing, product quality is traditionally measured offline in a laboratory, a process that is slow, expensive, and arrives too late to correct production issues. I develop *soft sensors*: machine learning models that predict quality from process data in real time. To handle the fact that industrial processes constantly evolve and could suffer from sudden and gradual drifts, I explore three complementary adaptation strategies:

- **Moving Window** — learns from the most recent data, tracking temporal shifts in the process
- **Just-in-Time Learning** — retrieves the most similar historical batches to build sample-specific predictions
- **Ensemble methods** — combines multiple models for enhanced robustness under changing conditions

Validated on 35,125 production batches at Michelin, with SHAP-based feature selection achieving over 80% dimensionality reduction while improving prediction accuracy by up to 61% over global baselines.

#### Online Uncertainty Quantification

A prediction is only useful if you know how much to trust it. I develop uncertainty quantification methods, with a focus on conformal prediction, that wrap any soft sensor with statistically valid prediction intervals. Two main contributions:

- **JiT-CP** (Just-in-Time Conformal Prediction): addresses the fact that standard conformal guarantees are *marginal* (correct on average) but can fail for specific process regimes. JiT-CP provides *locally adaptive* coverage by retrieving similar historical batches in a SOM-based latent space, yielding prediction intervals that remain reliable even when the process shifts.
- **AnyhowCP** (Anyhow Conformal Prediction): a flexible framework for *anytime* monitoring with budget allocation. Instead of expensive martingale tracking, it uses pre-computed thresholds and configurable monitoring contracts (full-sequence, sliding windows), enabling cost-aware sequential testing with distribution-free guarantees.

#### Unsupervised Learning and Dimensionality Reduction

I developed [TorchSOM](https://github.com/michelin/TorchSOM), an open-source PyTorch library for Self-Organizing Maps (SOMs) designed for industrial-scale data. SOMs preserve the topology of high-dimensional data at a local level, making them ideal for process monitoring and as a backbone for Just-in-Time retrieval. TorchSOM powers the similarity search at the heart of my soft sensing and conformal prediction pipelines.

TorchSOM achieves 77-99% faster training than MiniSom (on both CPU and GPU) with 34-81% better topographic error, and offers a scikit-learn-compatible API with advanced clustering support (K-Means, GMM, HDBSCAN) and several visualization tools.

<div class="row justify-content-sm-center mt-3 mb-3">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/research/torchsom_logo.png" title="TorchSOM Logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Previous Research

### Research at the [Adaptive & Intelligent Robotics Lab](https://www.imperial.ac.uk/adaptive-intelligent-robotics/) (AIRL)

<div class="row justify-content-sm-center mt-3 mb-3">
    <div class="col-sm-4 mt-3 mt-md-0 mx-auto">
        {% include figure.liquid path="assets/img/research/airl_logo.png" title="AIRL Logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

#### Model-Based Quality-Diversity Optimization

During my MSc at [Imperial College London](https://www.imperial.ac.uk/), supervised by [Pr. Antoine Cully](https://www.imperial.ac.uk/people/a.cully), I worked on Quality-Diversity (QD) optimization — a family of evolutionary algorithms that doesn't just find *one* good solution, but a diverse repertoire of high-performing ones. Traditional QD methods require hundreds of thousands of evaluations, which is impractical for expensive simulations. I tackled this by integrating surrogate models and active sampling, testing eight algorithmic variants on a robotic arm control task and achieving significant gains in sample efficiency.

---

### Research at the [CNRS Brain & Cognitive Research Center](https://cerco.cnrs.fr/) (CerCo)

<div class="row justify-content-sm-center mt-3 mb-3">
    <div class="col-sm-4 mt-3 mt-md-0 mx-auto">
        {% include figure.liquid path="assets/img/research/cnrs_logo.png" title="CNRS & CerCo Logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

#### Detection of Pathological Oscillations in Epilepsy

During my MSc at [IMT Mines Ales](https://www.imt-mines-ales.fr/), supervised by [Dr. Ludovic Gardy](https://www.linkedin.com/in/ludovic-gardy/), [Pr. Christophe Hurter](https://www.linkedin.com/in/christophe-hurter-2514393/), and [Pr. Emmanuel Barbeau](https://www.linkedin.com/in/emmanuel-barbeau-153b151b9/), I developed deep learning methods for detecting *fast ripples* — brief, high-frequency bursts in brain signals that serve as biomarkers for epileptic tissue. The pipeline converts raw EEG signals into time-frequency images (via continuous wavelet transform), classifies them with CNNs, and uses Grad-CAM to highlight which parts of the signal drive the model's decision — giving clinicians both a prediction and a visual explanation.
