---
layout: minimal
title: "Research"
permalink: /research/
author_profile: true
---

# Ongoing Research Interests

My research lies at the intersection of applied mathematics and machine learning, focusing on developing robust theoretical frameworks with practical applications. As part of my PhD thesis at [Centre de Mathématiques Appliquées](https://www.cmap.polytechnique.fr/) — CMAP — of [École Polytechnique](https://www.polytechnique.edu/), in collaboration with [Michelin](https://www.michelin.com/), I work on the following research areas:

### Online Sensors

I develop machine learning and deep learning approaches to monitor the quality of rubber production lines in real-time. My work explores three main strategies: Moving Window — MW — techniques for temporal data analysis, Just-in-Time Learning — JITL — for adaptive modeling, and Ensemble — ENS — methods for improved prediction robustness. These approaches aim to provide accurate quality assessments while maintaining computational efficiency in industrial settings.

### Uncertainty Quantification

I focus on developing reliable uncertainty quantification methods for machine learning predictions, with a particular emphasis on conformal prediction — CP. This research is crucial for industrial applications where prediction reliability directly impacts decision-making. The long-term goal is to enable dynamic adjustment of production line settings and refinement of laboratory samples based on both predictions and their associated uncertainties, leading to more robust and efficient manufacturing processes.

### Self-Organizing Maps (SOMs)

I developed <a href="https://github.com/michelin/TorchSOM" target="_blank" rel="noopener noreferrer">TorchSOM</a>, an innovative package for dimensionality reduction and data visualization. As an alternative to traditional methods like UMAP and t-SNE, TorchSOM offers unique advantages for industrial applications, particularly in Just-in-Time Learning strategies. The package provides efficient representations of high-dimensional data, making it valuable for process monitoring and quality control.

### Hybrid Modeling (Future Direction)

I am interested in exploring hybrid modeling approaches that would combine physics-based knowledge with data-driven methods to enhance predictive performance in industrial applications. This research direction would focus on integrating synthetic data generated from physical models with real-world measurements to improve model robustness and generalization. By leveraging uncertainty quantification techniques, we could effectively weight and combine these different sources of information, leading to more reliable predictions. This approach would be particularly valuable in scenarios with limited real data or when physical constraints must be respected.

<!-- Add a space between the two sections -->
<p>&nbsp;</p> 

# Previous Research Applications

### Model-Based Quality-Diversity Optimization

During my MSc at [Imperial College London](https://www.imperial.ac.uk/), I worked in the [Adaptive & Intelligent Robotics Lab](https://www.imperial.ac.uk/adaptive-intelligent-robotics/) under the supervision of [Pr. Antoine Cully](https://www.imperial.ac.uk/people/a.cully). My research focused on:

Quality-Diversity (QD) optimization is a branch of evolutionary algorithms that aims to find a collection of diverse and high-performing solutions to a problem. Traditional QD algorithms require many evaluations, which can be expensive in real-world applications.

In uncertain and noisy environments, QD algorithms may return unreliable solutions and suffer from low data efficiency. My work addresses this by integrating surrogate models and sampling strategies into QD algorithms, enabling them to produce robust and diverse solutions with fewer evaluations.

Eight algorithmic variants combining repertoire resets, model architectures, and sampling methods were tested on a robotic arm task.

<!-- <div class="research-highlight">
  <p>In uncertain and noisy environments, QD algorithms may return unreliable solutions and suffer from low data efficiency. My work addresses this by integrating surrogate models and sampling strategies into QD algorithms, enabling them to produce robust and diverse solutions with fewer evaluations.</p>

  <p>Eight algorithmic variants combining repertoire resets, model architectures, and sampling methods were tested on a robotic arm task.</p>
</div> -->

<!-- <div style="text-align: center; margin: 30px 0;">
  <a href="https://github.com/LouisTier/Model-Based_Quality-Diversity" class="btn btn-primary">View Project on GitHub</a>
  <a href="/assets/documents/pdf/IRP_LouisBERTHIER.pdf" class="btn btn-secondary">Read Thesis (PDF)</a>
</div> -->

### Detection of Pathological Oscillations in Epilepsy

During my MSc at [IMT Mines Alès](https://www.imt-mines-ales.fr/), I conducted research at the [CerCo Laboratory](https://cerco.cnrs.fr/) under the supervision of [Dr. Ludovic Gardy](https://www.linkedin.com/in/ludovic-gardy/) and [Pr. Christophe Hurter](https://www.linkedin.com/in/christophe-hurter-2514393/).

My work focused on the detection of pathological oscillations in epilepsy — specifically fast-ripples — using signal processing and convolutional neural networks — CNNs. 

I transformed 1D EEG signals into 2D time-frequency scalograms via Morlet-based continuous wavelet transform — CWT —, enabling efficient CNN processing. To enhance model interpretability, I applied Grad-CAM to trace key activation regions across CNN layers. I also optimized the processing pipeline with Cython, reducing computation time by 15%, and improved model generalization to multiple biomarkers.

