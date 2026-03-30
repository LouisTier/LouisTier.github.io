---
layout: page
title: "Research"
permalink: /research/
description: Applied mathematics and machine learning for industrial systems.
nav: true
nav_order: 1
---

My research lies at the intersection of applied mathematics and machine learning, with a focus on developing reliable theoretical frameworks for real-world industrial applications.
I am currently engaged in research collaborations with both Michelin and Augmodo, applying uncertainty-aware machine learning methods to industrial and retail settings.

---

## Current Research

### Personal Exploration: Diffusion Models

I am exploring diffusion models and their applications to live video and industrial settings, as part of an entrepreneurial project bridging generative AI with practical solutions.

---

### Research at [Augmodo](https://www.augmodo.com/)

<div class="row justify-content-sm-center mt-3 mb-3">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/research/augmodo_logo.png" title="Augmodo Logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

#### Inference-Time Uncertainty Quantification

I collaborate with [Augmodo](https://www.augmodo.com/) as a Computer Vision Scientist, developing uncertainty-aware computer vision models for open-world retail deployments.
My work focuses on robust pipelines handling millions of images per day, applying uncertainty quantification to ensure reliable performance at scale.
I collaborate closely with [Sacha Hu](https://www.sachahu.com/), Senior Computer Vision Scientist, on end-to-end pipeline development.

---

### Research at [Michelin](https://www.michelin.com/)

<div class="row justify-content-sm-center mt-3 mb-3">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/research/michelin_logo.png" title="Michelin Logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

As part of my PhD at the [Centre de Mathematiques Appliquees (CMAP)](https://cmap.ip-paris.fr/) — [Ecole Polytechnique](https://www.polytechnique.edu/) — in collaboration with [Michelin](https://www.michelin.com/), I work on the following research directions:

#### Adaptive Soft Sensing

Machine learning and deep learning methods for real-time quality monitoring in rubber manufacturing. I explore three complementary strategies:

- **Moving Window (MW)** — temporal pattern analysis
- **Just-in-Time Learning (JITL)** — adaptive, sample-specific modeling
- **Ensemble (ENS)** — enhanced robustness and stability

These methods deliver accurate quality assessments under dynamic industrial conditions, enabling proactive decision-making in production environments.

#### Online Uncertainty Quantification

Uncertainty-aware learning frameworks for industrial predictive modeling, with a focus on conformal prediction (CP). This work provides statistically valid confidence measures alongside predictions, supporting safer decision-making and, in the long term, autonomous process control.

#### Unsupervised Learning and Dimensionality Reduction

I developed [TorchSOM](https://github.com/michelin/TorchSOM), a PyTorch-based package for dimensionality reduction and data visualization using Self-Organizing Maps (SOMs), designed for industrial scalability. As an alternative to UMAP and t-SNE, TorchSOM provides topology-preserving, interpretable representations of high-dimensional data, suited for JITL and process monitoring.

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

During my MSc at [Imperial College London](https://www.imperial.ac.uk/), supervised by [Pr. Antoine Cully](https://www.imperial.ac.uk/people/a.cully), I worked on Quality-Diversity (QD) optimization — a branch of evolutionary computation discovering diverse, high-performing solutions. I addressed the data-hunger of traditional QD algorithms by integrating surrogate models and active sampling strategies, testing eight algorithmic variants on a robotic arm control task with improved sample efficiency.

---

### Research at the [CNRS Brain & Cognitive Research Center](https://cerco.cnrs.fr/) (CerCo)

<div class="row justify-content-sm-center mt-3 mb-3">
    <div class="col-sm-4 mt-3 mt-md-0 mx-auto">
        {% include figure.liquid path="assets/img/research/cnrs_logo.png" title="CNRS & CerCo Logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

#### Detection of Pathological Oscillations in Epilepsy

During my MSc at [IMT Mines Ales](https://www.imt-mines-ales.fr/), supervised by [Dr. Ludovic Gardy](https://www.linkedin.com/in/ludovic-gardy/), [Pr. Christophe Hurter](https://www.linkedin.com/in/christophe-hurter-2514393/), and [Pr. Emmanuel Barbeau](https://www.linkedin.com/in/emmanuel-barbeau-153b151b9/), I worked on detecting pathological oscillations (fast ripples) in epileptic EEG signals using CNNs. I transformed 1D signals into 2D time-frequency scalograms via Morlet-based CWT, applied Grad-CAM for interpretability, and optimized the pipeline with Cython (15% computation time reduction) for improved cross-biomarker generalization.
