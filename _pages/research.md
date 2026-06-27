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

As a Computer Vision Scientist at [Augmodo](https://www.augmodo.com/), I develop uncertainty-aware vision models for open-world retail environments, settings where the camera encounters products, lighting conditions, and edge cases never seen during training.
I work alongside [Sacha Hu](https://www.sachahu.com/) (Senior CV Engineer), [Ashley Napier](https://www.linkedin.com/in/ashleyanapier/) (CV Group Lead), and [Shubham Wagh](https://www.linkedin.com/in/shubhamwagh/) (Senior CV Engineer) on pipelines that process millions of images daily. My contributions include:

- **Uncertainty-aware quality control**: building open-world classifiers for product identification across tens of thousands of retail shelf images, using test-time augmentation to quantify prediction confidence and reduce manual QC workload by selectively accepting only high-confidence predictions
- **Empty shelf area flagging**: an RGB+depth classification pipeline that identifies truly empty shelf areas, enabling QC teams to focus human review on genuinely uncertain cases
- **Low-cost dataset relabeling**: leveraging improved object detectors to update legacy bounding box annotations at scale, adapting existing large datasets to newer models without costly manual re-annotation
- **Hard-negative object detection**: pushing empty-shelf-area detection further by fine-tuning detectors on *hard negatives*, frames the model previously got wrong during quality review, and benchmarking YOLO-based detectors against RF-DETR, a transformer detector with millions of parameters (I handle the training and fine-tuning)

---

### Research at [Michelin](https://www.michelin.com/)

<div class="row justify-content-sm-center mt-3 mb-3">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/research/michelin_logo.png" title="Michelin Logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

My PhD, carried out at the [Centre de Mathématiques Appliquées (CMAP)](https://cmap.ip-paris.fr/) of [École Polytechnique](https://www.polytechnique.edu/) in collaboration with [Michelin](https://www.michelin.com/), focuses on predicting rubber quality in real time, directly on the production line. It rests on three pillars.

#### Adaptive Soft Sensing

In tire manufacturing, product quality is traditionally measured offline in a laboratory, a process that is slow, expensive, and arrives too late to correct production issues. I develop *soft sensors*, machine learning models that predict quality from live process signals in real time, so the answer is available on the line instead of hours later in the lab. Because industrial processes constantly evolve, with both gradual and sudden drifts, I built a unified online framework that benchmarks five adaptation strategies:

- **Moving Window**: learns from the most recent batches to track gradual temporal shifts
- **Ensemble**: combines several models for robustness, their disagreement also flagging when the process moves into unfamiliar territory
- **Just-in-Time Learning**: for each new sample, retrieves the most similar historical batches and fits a prediction tailored to it
- **Just-in-Time Moving Window** and **Just-in-Time Ensemble**: two hybrids that blend similarity-based retrieval with temporal memory

Validated on 35,125 production batches at Michelin and tested over both a short horizon of about six weeks and a full year of drift, every adaptive strategy beats a static model: the best hybrid cuts prediction error by around 59% in the short term and by more than 90% under year-long drift, the hybrids paying off most because they balance short-term reactivity against long-term memory.

#### Online Uncertainty Quantification

A prediction is only useful if you know how much to trust it. I develop uncertainty quantification methods, with a focus on conformal prediction, a distribution-free way to turn any model's output into a prediction interval that is right a chosen fraction of the time, say 90%. The catch is that this guarantee usually holds only *on average*, which is where my two contributions come in:

- **Self-Organized Conformal Prediction**: an average-case guarantee can hide *regional* undercoverage, intervals that look reliable overall yet are systematically too tight for a safety-critical corner of the process. It discovers those regions directly from the input geometry with a Self-Organizing Map, then calibrates locally inside each one, with no supervised labels and no model retraining. It offers three ways to draw the local calibration set, the best-matching cell, a fixed neighborhood around it, or the nearest prototypes, and recovers near cell-conditional coverage while staying model and score agnostic. Across eight benchmarks spanning regression and classification, on both tabular features and image embeddings, it narrows the regional coverage gap on seven of them, by about 8% for only a 1.2% increase in prediction-set size.
- **Mask-Valid Conformal Prediction**: deploying conformal prediction over a long stream of batches calls for coverage that localizes to flexible time windows, renews after a failure, and never needs past test labels. It meets this with binary monitoring masks that interpolate between the marginal and the anytime regimes, a restart rule that renews validity after each detected failure, and cost-optimal monitoring schedules found by solving a problem with linear constraints (with a replanning step when those costs are only forecast). Crucially, it stays informative for far longer, polynomially many steps in the calibration size, whereas anytime e-process baselines can collapse to uninformative sets after only a handful.

#### Unsupervised Learning and Dimensionality Reduction

I created [TorchSOM](https://github.com/michelin/TorchSOM), the reference PyTorch library for Self-Organizing Maps (SOMs). A SOM maps high-dimensional data onto a low-dimensional grid while preserving its local topology, which makes it a natural backbone for process monitoring, for Just-in-Time retrieval, and for the unsupervised group discovery in Self-Organized Conformal Prediction. TorchSOM powers the similarity search at the heart of my soft sensing and conformal prediction pipelines.

<div class="row justify-content-sm-center mt-3 mb-3">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/research/torchsom_logo.png" title="TorchSOM Logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Unlike earlier SOM tools, it brings together a native PyTorch backend with GPU acceleration, a scikit-learn-compatible API, a built-in clustering interface (K-Means, GMM, HDBSCAN), a suite of seven visualizations, Just-in-Time learning support, and rectangular or hexagonal grids that can wrap into toroidal shapes, all in one modular codebase, with an optional FAISS backend for very large maps. It reaches the lowest topographic error in every configuration benchmarked, 34 to 81% below MiniSom, while training 74 to 98% faster than MiniSom on CPU and up to about eight times faster than somoclu on GPU. It ships on PyPI under the Apache 2.0 license through Michelin's open-source organization, with 90% test coverage and full documentation.

---

## Previous Research

### Research at the [Adaptive & Intelligent Robotics Lab](https://www.imperial.ac.uk/adaptive-intelligent-robotics/) (AIRL)

<div class="row justify-content-sm-center mt-3 mb-3">
    <div class="col-sm-4 mt-3 mt-md-0 mx-auto">
        {% include figure.liquid path="assets/img/research/airl_logo.png" title="AIRL Logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

#### Model-Based Quality-Diversity Optimization

During my MSc at [Imperial College London](https://www.imperial.ac.uk/), supervised by [Pr. Antoine Cully](https://www.imperial.ac.uk/people/a.cully), I worked on Quality-Diversity (QD) optimization, a family of evolutionary algorithms that doesn't just find *one* good solution but a diverse repertoire of high-performing ones. Traditional QD methods require hundreds of thousands of evaluations, which is impractical for expensive simulations. I tackled this by integrating surrogate models and active sampling, testing eight algorithmic variants on a robotic arm control task and achieving significant gains in sample efficiency.

---

### Research at the [CNRS Brain & Cognitive Research Center](https://cerco.cnrs.fr/) (CerCo)

<div class="row justify-content-sm-center mt-3 mb-3">
    <div class="col-sm-4 mt-3 mt-md-0 mx-auto">
        {% include figure.liquid path="assets/img/research/cnrs_logo.png" title="CNRS & CerCo Logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

#### Detection of Pathological Oscillations in Epilepsy

During my MSc at [IMT Mines Ales](https://www.imt-mines-ales.fr/), supervised by [Dr. Ludovic Gardy](https://www.linkedin.com/in/ludovic-gardy/), [Pr. Christophe Hurter](https://www.linkedin.com/in/christophe-hurter-2514393/), and [Pr. Emmanuel Barbeau](https://www.linkedin.com/in/emmanuel-barbeau-153b151b9/), I developed deep learning methods for detecting *fast ripples*, brief high-frequency bursts in brain signals that serve as biomarkers for epileptic tissue. The pipeline converts raw EEG signals into time-frequency images (via continuous wavelet transform), classifies them with CNNs, and uses Grad-CAM to highlight which parts of the signal drive the model's decision, giving clinicians both a prediction and a visual explanation.
