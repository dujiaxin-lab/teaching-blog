---
layout: post
title: How Do We Know If an AI Model Is Actually Good?
permalink: /how-do-we-know-if-an-ai-model-is-good/
topic: ai
description: A classroom discussion on benchmarks, practical comparisons, and verifying AI-generated analysis.
keywords: artificial intelligence evaluation benchmarks data analysis models performance cost
---
# How Do We Know If an AI Model Is Actually Good?

*AI for Data Analysis \| CIS 331 — Data Analysis Tools and Techniques \| November 2026*

Every week, it seems, another AI model arrives with a claim: better reasoning, better coding, faster answers. But how do we know whether it's actually better?

This isn't just a question for researchers. Companies increasingly need people who can evaluate AI tools and decide which ones are worth using. We explored this question recently in my CIS 331 class, and I want to share a few ideas from our discussion.

## 1. Better at What?

I often tell students that computing is about making things computable. So wouldn't it be nice to assign every AI model a score and pick the highest one?

Unfortunately, there's no single number that tells the whole story.

A useful starting point is to compare **performance and cost**. Model announcements often plot these two dimensions, but both deserve a closer look. [Artificial Analysis](https://artificialanalysis.ai/models) is a handy place to compare capability, price, output speed, and latency.

**Performance** depends on the task: a model that excels at coding may not be your favorite for writing or analyzing data. That's why we'll spend most of this post on how performance is measured.

**Cost** is more than the price on an API page. There is the money you pay per token or subscription, but also the time you wait for an answer, the effort spent checking it, and the cost of fixing mistakes. A cheap model that repeatedly gets things wrong may end up being expensive. A powerful model that takes too long may be impractical for everyday work.

Imagine two models that summarize a spreadsheet equally well. If one is faster and cheaper, why pay more? But if a difficult analysis requires several attempts with the cheaper model, the stronger one might actually save both time and money. At scale, even small differences in price or latency matter.

So I wouldn't ask only, *Which model has the highest score?* I'd ask, *How good does it need to be, how often will I use it, and what will it cost me to get a result I can trust?*

**The best model isn't necessarily the most powerful. It's the one that works best for your task and budget.**

## 2. What Do AI Leaderboards Actually Measure?

Researchers use *benchmarks*: collections of questions or tasks that models attempt under comparable conditions. Some have clear right answers; others need expert judgment. Professors, PhD students, and industry researchers all contribute to this work.

And different benchmarks can produce very different rankings.

### Arena: Which Answer Do People Like Better?

[Arena](https://arena.ai/) lets people compare responses from two anonymous models. You enter a prompt, read both answers, and vote for the one you prefer. Many votes are combined into rankings.

I like this approach because usefulness matters. An answer might be technically correct but confusing, incomplete, or difficult to follow.

But there's a catch: **the answer people prefer isn't always the correct one.** A confident, beautifully written explanation of a statistical mistake can beat a less polished but accurate response.

Try browsing [Arena's leaderboard](https://arena.ai/leaderboard). Do the same models lead in every category?

### Mercor: Can AI Do Real Professional Work?

Another interesting example is [Mercor's APEX benchmarks](https://www.mercor.com/apex/). Instead of focusing only on short questions, APEX-Agents evaluates multi-step professional tasks in areas such as law, consulting, and investment banking.

These tasks can involve reading documents, finding evidence, using tools, doing calculations, and delivering a final product. Performance is judged against task-specific *rubrics*.

I became interested in Mercor after looking into how they gather expert knowledge to build these evaluations. It's a fascinating process: people with domain expertise help design realistic tasks, define what success looks like, and assess the results.

It reminds us that even as AI improves, **human expertise is still essential to evaluating it.**

## 3. Our Classroom Experiment: Two Models, One Spreadsheet

In CIS 331, we tested this idea using the *Global Superstore* dataset, which includes retail orders, sales, and profit.

Our task was simple: identify the product categories with the highest total sales and profit, make a bar chart, and explain the findings to a general reader.

We gave two models the same dataset and prompt. Why? Because if we change the instructions, we won't know whether the differences come from the models or from us.

We also discussed testing the weaker model first. Some AI applications retain conversation context, and a later model might benefit from an earlier answer. I recommend **separate, fresh conversations** and **testing the weaker model first**. Even a fresh chat may not fully isolate what an application remembers across conversations, so starting with the weaker model is an extra precaution—not a guarantee against contamination.

During my Gemini demonstration, the models organized tables, charts, and explanations differently. But a nicer-looking chart doesn't necessarily mean better analysis.

Here's the checklist we used:

| Dimension | What to check |
|---|---|
| Correctness | Are the sales and profit totals right? |
| Completeness | Were all relevant records included? |
| Visualization | Is the chart accurate and clearly labeled? |
| Explanation | Can a general reader understand it? |
| Limitations | Does the model recognize what the data can't show? |
| Efficiency | How long did the work take? |
| Transparency | Can we trace the worksheet and calculations? |

A model could create a great chart while silently excluding records. Another could calculate everything correctly but explain profit in a misleading way.

These are the differences worth noticing.

## 4. How Do We Know the Answer Is Correct?

This is probably the most important lesson:

**Two AI models agreeing doesn't prove either one is right.**

They might make the same assumption, misunderstand the same instruction, or repeat the same error. We need evidence independent of the AI responses.

For our assignment, that means opening the original spreadsheet in Tableau or Excel and checking a numerical claim. In Tableau, for example:

1. Open the Global Superstore order data.
2. Put `Category` on Rows.
3. Put `Profit` on Text and use `SUM(Profit)`.
4. Check for unintended filters, then compare the totals with the AI's results.

If the numbers match, we've verified that particular calculation—not the entire analysis. If they don't, we can investigate: wrong worksheet? Missing rows? Unexpected filter? Arithmetic mistake?

I want students to get comfortable asking not just *Does this look right?* but *What evidence would convince me it's right?*

## 5. Will the Stronger Model Always Win?

Not necessarily. For a straightforward calculation, a smaller model might do just as well as a more capable one.

The stronger model might explain the result better or catch an unusual data issue. Or it might simply write more words without adding value.

There's also variation between runs. Even with the same prompt, models can produce different explanations—and sometimes make different analytical choices.

So our classroom comparison isn't a definitive ranking. It's a small experiment. And it's perfectly reasonable to conclude that both models did equally well, **as long as the evidence supports that conclusion**.

## 6. A Good Model Isn't the Same as a Good AI Tool

A **model** generates responses; an **AI application** adds features such as file uploads, code execution, and computer control. In class, I showed an AI assistant working with Tableau. That raises another question: can we trust AI not just to answer, but to *act*?

An incorrect chat answer can be checked before use. An agent that edits the wrong file or sends an email may be harder to undo. So evaluating AI tools also means checking permissions, privacy, and human oversight. We'll return to this in another tutorial.

## 7. What Should We Take Away?

Leaderboards, human preferences, professional benchmarks, speed, and price each tell us something different. None tells the whole story.

For data analysis, I come back to three questions: **Is it correct? Is it useful? Can I verify how it got there?**

AI can generate an answer. Our job is to decide whether the evidence supports it.

---
## Want to Go Further? Recent Research on AI Evaluation

AI evaluation is an active research area, and many of the questions we discussed in class remain open. If you're curious about how researchers are tackling these problems, here are a few recent papers worth exploring.

You don't need to understand every technical detail. Start with the introduction, look at the figures, and try to identify the problem each paper is trying to solve.

1. **When AI Benchmarks Plateau: A Systematic Study of Benchmark Saturation (2026)**  
   What happens when AI models become so good at a benchmark that it can no longer distinguish between them? This paper examines why benchmarks lose their usefulness over time.

2. **SkillsBench: Benchmarking How Well Agent Skills Work Across Diverse Tasks (2026)**  
   How can we tell whether adding a new tool or skill actually improves an AI agent? This paper explores controlled comparisons, an idea closely related to our classroom experiment.

3. **Nine Judges, Two Effective Votes: Correlated Errors Undermine LLM Evaluation Panels (2026)**  
   If nine AI models agree on an answer, should we trust it? This paper investigates why multiple AI judges can still make the same mistakes.

4. **Claw-Eval: Towards Trustworthy Evaluation of Autonomous Agents (2026)**  
   When an AI agent can use tools, modify files, and interact with software, checking its final answer isn't enough. This paper explores how to evaluate both what an agent accomplishes and what it does along the way.

For more, see [Top 10 Eval Papers of 2026](https://www.google.com/search?q=%22My+Top+10+Eval+Papers+of+2026%22), a curated reading list covering these and other evaluation challenges.

**A question to think about:** If you were designing a benchmark to evaluate AI for data analysis, what would you test that existing leaderboards might miss?

### Further Reading

- [Arena — Leaderboard](https://arena.ai/leaderboard)
- [Arena — How Rankings Work](https://arena.ai/faq)
- [Mercor — APEX Benchmarks](https://www.mercor.com/apex/)
- [Mercor — Methodology](https://www.mercor.com/apex/methodology/)
- [Artificial Analysis — Model Comparisons](https://artificialanalysis.ai/models)

### For CIS 331 Students

For Module 9, give two different models the same Global Superstore dataset and prompt, in separate, fresh conversations, testing the weaker model first. Record the exact model names, compare their calculations and charts, and independently verify at least one number in Tableau or Excel.

Your one-page comparison doesn't need to declare a universal winner. I want to see **your reasoning and the evidence behind it**.
