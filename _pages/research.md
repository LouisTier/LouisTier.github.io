---
layout: page
title: "Research"
permalink: /research/
description: Applied mathematics and machine learning for industrial systems.
nav: true
nav_order: 1
---

My research develops machine learning methods that are not only accurate but also *know when they might be wrong*, a critical property for deployment in high-stakes industrial environments.

---

## Current Research

I currently work on three fronts: uncertainty-aware machine learning for tire manufacturing in my PhD with [Michelin](https://www.michelin.com/), computer vision for retail at [Augmodo](https://www.augmodo.com/), and world models for EEG through the Unaite Fellowship.

### Research at [Michelin](https://www.michelin.com/)

<div class="row justify-content-sm-center mt-3 mb-3">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/research/michelin_logo.png" title="Michelin Logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

My PhD, carried out at the [Centre de Mathématiques Appliquées (CMAP)](https://cmap.ip-paris.fr/) of [École Polytechnique](https://www.polytechnique.edu/) in collaboration with [Michelin](https://www.michelin.com/), focuses on predicting rubber quality in real time, directly on the production line. It rests on four pillars.

#### Explainable Process Analytics

Before predicting quality online, one has to understand what drives it. Batches made to the same quality grade still fluctuate, and the causes are hard to untangle from recipe settings, raw materials, process variables, and even the weather. On 35,125 Michelin rubber-mixing records with 316 input variables, I built an offline analytics framework that is both explainable and uncertainty-aware: ranked frequency feature selection keeps only 20 variables (94% fewer) at equal accuracy, SHAP (which scores how much each variable drives a prediction) reveals the influential variables, their threshold-like effects, and their interactions, and multi-split conformal prediction adds calibrated prediction intervals with subgroup diagnostics that expose undercoverage. This work is published in [Digital Chemical Engineering](/publications/#berthier2026explainable_offline_analytics) (2026) and extends my [ESCAPE 35 paper](/publications/#berthier2025knowledge_discovery_rubber_mixing).

#### Adaptive Soft Sensing

In tire manufacturing, product quality is traditionally measured offline in a laboratory, a process that is slow, expensive, and arrives too late to correct production issues. I develop *soft sensors*, machine learning models that predict quality from live process signals in real time, so the answer is available on the line instead of hours later in the lab. Because industrial processes constantly evolve, with both gradual and sudden drifts, I built a unified online framework that benchmarks five adaptation strategies:

- **Moving Window**: learns from the most recent batches to track gradual temporal shifts
- **Ensemble**: combines several models for robustness, their disagreement also flagging when the process moves into unfamiliar territory
- **Just-in-Time Learning**: for each new sample, retrieves the most similar historical batches and fits a prediction tailored to it
- **Just-in-Time Moving Window** and **Just-in-Time Ensemble**: two hybrids that blend similarity-based retrieval with temporal memory

Validated on 35,125 production batches at Michelin and tested over both a short horizon of about six weeks and a full year of drift, every adaptive strategy beats a static model: the best hybrid cuts prediction error by around 59% in the short term and by more than 90% under year-long drift, the hybrids paying off most because they balance short-term reactivity against long-term memory.

The Just-in-Time soft sensor, which retrieves similar batches through a Self-Organizing Map and selects the most influential variables online with SHAP, was published at [IEEE ETFA 2026](/publications/#berthier2026etfa_adaptive_soft_sensing), where I presented it in Västerås: on a Michelin rubber production line, it cuts the mean squared error by up to 61% and lifts R² from -0.14 to 0.56 over global baselines.

#### Online Uncertainty Quantification

A prediction is only useful if you know how much to trust it. I develop uncertainty quantification methods, with a focus on conformal prediction, a distribution-free way to turn any model's output into a prediction interval that is right a chosen fraction of the time, say 90%. The catch is that this guarantee usually holds only *on average*, which is where my contributions come in:

- **Self-Organized Conformal Prediction** ([NeurIPS 2026](/publications/#berthier2026selforganized_cp) · [paper](https://arxiv.org/abs/2606.29403) · [code](https://github.com/LouisTier/SOCP)): an average-case guarantee can hide *regional* undercoverage, intervals that look reliable overall yet are systematically too tight for a safety-critical corner of the process. It discovers those regions directly from the input geometry with a Self-Organizing Map, then calibrates locally inside each one, with no supervised labels and no model retraining. It offers three ways to draw the local calibration set (the best-matching cell, a fixed neighborhood around it, or an enlargement by prototype distance), with exact cell-conditional validity when retrieving a single cell, while staying model and score agnostic. Across ten regression and classification benchmarks, it lowers the regional coverage gap on all ten, by 14.8% on average, for only a 3% increase in prediction-set size.
- **Mask-Valid Conformal Prediction** (under review): deploying conformal prediction over a long stream of batches calls for coverage that localizes to flexible time windows, renews after a failure, and never needs past test labels. It meets this with binary monitoring masks that interpolate between the marginal and the anytime regimes, a restart rule that renews validity after each detected failure, and cost-optimal monitoring schedules found by solving a problem with linear constraints (with a replanning step when those costs are only forecast). Crucially, it stays informative for far longer, polynomially many steps in the calibration size, whereas anytime e-process baselines can collapse to uninformative sets after only a handful. Joint work with [Mahmoud Hegazy](https://mahegz.github.io/), [Michael I. Jordan](https://www.linkedin.com/in/michael-jordan-767032125/), and [Aymeric Dieuleveut](https://www.linkedin.com/in/aymeric-dieuleveut-007211207/).
- **Where Should Locality Enter Conformal Prediction?** (under review): with [Eric Moulines](https://www.linkedin.com/in/eric-moulines-61512860/), I compare two ways of making conformal prediction local on a fixed partition: estimating a threshold inside each cell (Mondrian calibration), or rescaling scores cell by cell before pooling them (score normalization). With limited labels, estimating quantiles separately in each cell before pooling has an explicit cost in coverage risk compared with Mondrian calibration on the same labels.

#### Unsupervised Learning and Dimensionality Reduction

I created [TorchSOM](https://github.com/michelin/TorchSOM), the reference PyTorch library for Self-Organizing Maps (SOMs). A SOM maps high-dimensional data onto a low-dimensional grid while preserving its local topology, which makes it a natural backbone for process monitoring, for Just-in-Time retrieval, and for the unsupervised group discovery in Self-Organized Conformal Prediction. TorchSOM powers the similarity search at the heart of my soft sensing and conformal prediction pipelines.

<div class="row justify-content-sm-center mt-3 mb-3">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/research/torchsom_logo.png" title="TorchSOM Logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Unlike earlier SOM tools, it brings together a native PyTorch backend with GPU acceleration, a scikit-learn-compatible API, a built-in clustering interface (K-Means, GMM, HDBSCAN), a suite of seven visualizations, Just-in-Time learning support, and rectangular or hexagonal grids that can wrap into toroidal shapes, all in one modular codebase, with an optional FAISS backend for very large maps. It reaches the lowest topographic error in every configuration benchmarked, 34 to 81% below MiniSom, while training 74 to 98% faster than MiniSom on CPU and up to about eight times faster than somoclu on GPU. It ships on PyPI under the Apache 2.0 license through Michelin's open-source organization, with 90% test coverage and full documentation, and is described in a paper published in the [Journal of Machine Learning Research](https://jmlr.org/papers/v27/25-2467.html) (2026).

---

### Research at [Augmodo](https://www.augmodo.com/)

<div class="row justify-content-sm-center mt-3 mb-3">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/research/augmodo_logo.png" title="Augmodo Logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

#### Inference-Time Uncertainty Quantification

As a Computer Vision Scientist at [Augmodo](https://www.augmodo.com/), I develop uncertainty-aware vision models for open-world retail environments, settings where the camera encounters products, lighting conditions, and edge cases never seen during training.
I work alongside [Sacha Hu](https://www.sachahu.com/) (Senior CV Engineer), [Ashley Napier](https://www.linkedin.com/in/ashleyanapier/) (CV Group Lead), and [Galen Han](https://www.linkedin.com/in/galenhan/) on pipelines that process more than 100,000 images a day. My contributions include:

- **Open-world vision-language models**: uncertainty-aware VLMs that recognize products, aisles, and price tags from images alone, trained on paired images and product descriptions for product identification and planogram matching
- **Uncertainty-aware quality control**: test-time augmentation quantifies the confidence of open-world classifiers for product identification, QC automation, and empty-shelf detection, so confident predictions are accepted automatically and only uncertain ones reach human review
- **Empty shelf area flagging**: an RGB+depth classification pipeline that identifies truly empty shelf areas, enabling QC teams to focus human review on genuinely uncertain cases
- **Low-cost dataset relabeling**: automated pipelines that use improved object detectors to update legacy bounding box annotations at scale, adapting existing large datasets to newer models without costly manual re-annotation
- **Hard-negative object detection**: fine-tuning YOLO and RF-DETR, a transformer-based detector, on *hard negatives*, frames the model previously got wrong during quality review, with multi-GPU cloud training, which improves empty-shelf detection without regressing the other shelf classes

---

### Unaite Fellowship for AI in Biology

In 2026, I joined the inaugural cohort of the [Unaite Fellowship for AI in Biology](https://fellowship.unaite.fr/program), a year-long international research fellowship in Paris. With fellow researchers and [Paul Hellegouarch](https://www.linkedin.com/in/paul-hellegouarch/), and mentored by [Dr. Quentin Garrido](https://garridoq.com/) and [Dr. Jean-Baptiste Masson](https://research.pasteur.fr/fr/member/jean-baptiste-masson/), I work on generative and world models for EEG. The project brings together two threads of my work: brain signals, which I first studied at the CNRS, and world models, which I explored with the [fly-brain world model](/projects/3_hack_the_worlds/) we built at Hack the World(s).

---

## Previous Research

Before my PhD, my two master's degrees took me to robotics at Imperial College London and to neuroscience at the CNRS.

### Research at the [Adaptive & Intelligent Robotics Lab](https://www.imperial.ac.uk/adaptive-intelligent-robotics/) (AIRL)

<div class="row justify-content-sm-center mt-3 mb-3">
    <div class="col-sm-4 mt-3 mt-md-0 mx-auto">
        {% include figure.liquid path="assets/img/research/airl_logo.png" title="AIRL Logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

#### Model-Based Quality-Diversity Optimization

During my MSc at [Imperial College London](https://www.imperial.ac.uk/), supervised by [Pr. Antoine Cully](https://www.imperial.ac.uk/people/a.cully), I worked on Quality-Diversity (QD) optimization, a family of evolutionary algorithms that doesn't just find *one* good solution but a diverse repertoire of high-performing ones. Traditional QD methods require hundreds of thousands of evaluations, which is impractical for expensive simulations. I tackled this by integrating surrogate models and active sampling, testing eight algorithmic variants on a robotic arm control task: the best one beat MAP-Elites and came close to MAP-Elites with sampling. I also introduced two metrics for the uncertainty of a QD archive.

---

### Research at the [CNRS Brain & Cognitive Research Center](https://cerco.cnrs.fr/) (CerCo)

<div class="row justify-content-sm-center mt-3 mb-3">
    <div class="col-sm-4 mt-3 mt-md-0 mx-auto">
        {% include figure.liquid path="assets/img/research/cnrs_logo.png" title="CNRS & CerCo Logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

#### Detection of Pathological Oscillations in Epilepsy

During my MSc at [IMT Mines Alès](https://www.imt-mines-ales.fr/), supervised by [Dr. Ludovic Gardy](https://www.linkedin.com/in/ludovic-gardy/), [Pr. Christophe Hurter](https://www.linkedin.com/in/christophe-hurter-2514393/), and [Pr. Emmanuel Barbeau](https://www.linkedin.com/in/emmanuel-barbeau-153b151b9/), I developed deep learning methods for detecting *fast ripples*, brief high-frequency bursts in brain signals that serve as biomarkers for epileptic tissue. The pipeline converts raw EEG signals into time-frequency images (via continuous wavelet transform), classifies them with CNNs, and uses Grad-CAM to highlight which parts of the signal drive the model's decision, giving clinicians both a prediction and a visual explanation. This work contributed to a paper in the [Journal of Neuroscience Methods](https://doi.org/10.1016/j.jneumeth.2024.110350) (2025).
