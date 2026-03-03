window.PORTFOLIO_DATA = {
  name: "Asavari Shejwal",
  role: "Data engineering + product storytelling",
  email: "shejwal.a@northeastern.edu",
  linkedin: "https://www.linkedin.com/in/asavari-shejwal-217b761aa/",
  heroTitle: "Data platforms, polished interfaces, and stories told through evidence.",
  heroBody:
    "I build data systems and translate them into crisp experiences. Explore my interface work, decks, and GitHub projects below.",
  featuredProjects: [
    {
      name: "PDF AI Assistant",
      subtitle: "Retrieval-augmented document assistant",
      description: "Q&A over PDFs with fast retrieval, ranking, and summarization."
    },
    {
      name: "SEC Financial ETL",
      subtitle: "Automated data extraction pipeline",
      description: "Parses, normalizes, and transforms SEC filings into analytics-ready tables."
    },
    {
      name: "Premium Freight Cost",
      subtitle: "Operations analytics",
      description: "Root cause capture and incident workflows for freight operations."
    }
  ],
  workProjects: [
    {
      name: "Bose – Data Analytics Engineer",
      subtitle: "Work Experience · July–December 2025",
      description:
        "Data analytics engineering work focused on operational dashboards and decision support. The screenshots below are slides from the final presentation deck.",
      github: "",
      links: [],
      screenshots: [
        { label: "Slide 08", src: "assets/slides/final_presentation-08.png" },
        { label: "Slide 09", src: "assets/slides/final_presentation-09.png" },
        { label: "Slide 10", src: "assets/slides/final_presentation-10.png" },
        { label: "Slide 11", src: "assets/slides/final_presentation-11.png" },
        { label: "Slide 12", src: "assets/slides/final_presentation-12.png" },
        { label: "Slide 13", src: "assets/slides/final_presentation-13.png" },
        { label: "Slide 14", src: "assets/slides/final_presentation-14.png" },
        { label: "Slide 15", src: "assets/slides/final_presentation-15.png" },
        { label: "Slide 16", src: "assets/slides/final_presentation-16.png" },
        { label: "Slide 17", src: "assets/slides/final_presentation-17.png" },
        { label: "Slide 18", src: "assets/slides/final_presentation-18.png" },
        { label: "Slide 19", src: "assets/slides/final_presentation-19.png" },
        { label: "Slide 20", src: "assets/slides/final_presentation-20.png" },
        { label: "Slide 21", src: "assets/slides/final_presentation-21.png" },
        { label: "Slide 22", src: "assets/slides/final_presentation-22.png" },
        { label: "Slide 23", src: "assets/slides/final_presentation-23.png" }
      ]
    },
    {
      name: "PDF AI Assistant",
      subtitle: "Big Data Assignment 4",
      description:
        "PDF AI Assistant lets users upload PDFs, generate summaries, and ask questions using multiple LLMs. Built with FastAPI, Streamlit, LiteLLM, Redis caching, Docker Compose, and AWS S3 storage.",
      github: "https://github.com/Asavari24/BigDataAssignment4Part1",
      links: [
        {
          label: "Codelab",
          url: "https://asavari24.github.io/BigDataAssignment4Part1/#0"
        }
      ],
      screenshots: [
        {
          label: "Architecture",
          src: "assets/pdf_ai_assistant_architecture.png"
        }
      ]
    },
    {
      name: "MiniManus",
      subtitle: "NVIDIA Multi-Agent Research Assistant",
      description:
        "Multi-agent research assistant that blends structured valuation data, RAG over quarterly reports, and real-time web search. Built with LangGraph, FastAPI, Streamlit, Pinecone, Snowflake, SerpAPI, and Docker.",
      github: "https://github.com/BigDataSystemsTeam5/MiniManus",
      links: [
        {
          label: "Codelab",
          url: "https://bigdatasystemsteam5.github.io/MiniManus/#0"
        },
        {
          label: "Live App",
          url: "http://3.130.104.76:8501"
        }
      ],
      screenshots: [
        {
          label: "Architecture",
          src: "assets/minimanus_architecture.png"
        }
      ]
    },
    {
      name: "LLM-Powered Document Intelligence RAG Pipeline",
      subtitle: "NVIDIA RAG Pipeline",
      description:
        "End-to-end pipeline that ingests NVIDIA quarterly reports, parses PDFs, builds vector indexes, and serves RAG answers through FastAPI + Streamlit with Airflow orchestration.",
      github: "https://github.com/BigDataSystemsTeam5/LLM-Powered-Document-Intelligence-RAG-Pipeline-",
      links: [
        {
          label: "Codelab",
          url: "https://hishitathakkar.github.io/LLM-Powered-Document-Intelligence-RAG-Pipeline-/#0"
        }
      ],
      screenshots: [
        {
          label: "Architecture",
          src: "assets/llm-powered_rag_pipeline (1).png"
        }
      ]
    },
    {
      name: "Research Assistant with LangGraph",
      subtitle: "Big Data Hackathon Project",
      description:
        "Multi-agent research assistant with LangGraph that combines a RAG agent (Pinecone), Snowflake agent, web search (SerpAPI), and an image agent (DALL·E 3) to generate consolidated research reports.",
      github: "https://github.com/BigDataSystemsTeam5/HackathonProject_ElectricityReport/",
      links: [
        {
          label: "Codelab",
          url: "https://bigdatasystemsteam5.github.io/HackathonProject_ElectricityReport/#0"
        }
      ],
      screenshots: [
        {
          label: "Architecture",
          src: "assets/Research_Assistant_Langgraph.png"
        }
      ]
    },
    {
      name: "Automated SEC Financial Data Extraction & Transformation System",
      subtitle: "Big Data Systems Assignment 2",
      description:
        "Automates SEC Financial Statement Data Sets extraction and transformation with Airflow orchestration, DBT validation, Snowflake storage, and a FastAPI + Streamlit data access layer.",
      github: "https://github.com/Asavari24/BigDataSystemsAssignment2",
      links: [
        {
          label: "Codelab",
          url: "https://asavari24.github.io/BigDataSystemsAssignment2/#0"
        },
        {
          label: "Demo Video",
          url: "https://youtu.be/P9veLATRREw"
        },
        {
          label: "Streamlit App",
          url: "http://3.130.104.76:8501/"
        },
        {
          label: "FastAPI Docs",
          url: "http://3.130.104.76:8000/docs"
        }
      ],
      screenshots: [
        {
          label: "Architecture",
          src: "assets/sec_data_pipeline_architecture.png"
        },
        {
          label: "Dataset Used",
          src: "assets/Dataset_Used_SEC.png"
        },
        {
          label: "AWS S3 Object Storage",
          src: "assets/AWS_S3_SEC.png"
        },
        {
          label: "Snowflake Architecture",
          src: "assets/Snowflake_Folder_Structure.png"
        },
        {
          label: "Streamlit UI Dashboard",
          src: "assets/Streamlit_UI_SEC.png"
        },
        {
          label: "Streamlit UI Bar Graph",
          src: "assets/Streamlit_UI_BarGraph_SEC.png"
        }
      ]
    }
  ],
  slideDecks: [
    {
      title: "PDF AI Assistant",
      description: "Problem framing, pipeline overview, and results.",
      tags: ["LLM", "RAG", "Pipeline"],
      cover: "assets/pdf_ai_assistant_architecture.png",
      github: "https://github.com/Asavari24/BigDataAssignment4Part1"
    },
    {
      title: "SEC Financial ETL",
      description: "Extraction strategy, schema design, and data quality checks.",
      tags: ["ETL", "Data Quality", "SEC"],
      cover: "assets/sec_data_pipeline_architecture.png",
      github: "https://github.com/Asavari24/BigDataSystemsAssignment2"
    },
    {
      title: "NVIDIA RAG Pipeline",
      description: "Automated ingestion, hybrid retrieval, and LLM-powered answers.",
      tags: ["Airflow", "RAG", "Hybrid Search"],
      cover: "assets/llm-powered_rag_pipeline (1).png",
      github: "https://github.com/BigDataSystemsTeam5/LLM-Powered-Document-Intelligence-RAG-Pipeline-"
    }
  ],
  githubProjects: [
    {
      name: "PDF AI Assistant",
      description:
        "Upload PDFs, summarize content, and ask questions with multi-LLM support, Redis caching, and cost estimation.",
      url: "https://github.com/Asavari24/BigDataAssignment4Part1",
      stack: "FastAPI, Streamlit, LiteLLM, Redis, Docker, AWS S3"
    },
    {
      name: "MiniManus",
      description:
        "Multi-agent NVIDIA research assistant with RAG, Snowflake valuation data, and live web search.",
      url: "https://github.com/BigDataSystemsTeam5/MiniManus",
      stack: "LangGraph, FastAPI, Streamlit, Pinecone, Snowflake, SerpAPI"
    },
    {
      name: "Research Assistant with LangGraph",
      description:
        "Hackathon research assistant that orchestrates RAG, Snowflake insights, web search, and image generation.",
      url: "https://github.com/BigDataSystemsTeam5/HackathonProject_ElectricityReport/",
      stack: "LangGraph, FastAPI, Streamlit, Pinecone, Snowflake, SerpAPI"
    },
    {
      name: "NVIDIA RAG Pipeline",
      description:
        "End-to-end RAG pipeline for NVIDIA quarterly reports with Airflow ingestion, PDF parsing, and hybrid retrieval.",
      url: "https://github.com/BigDataSystemsTeam5/LLM-Powered-Document-Intelligence-RAG-Pipeline-",
      stack: "Airflow, FastAPI, Streamlit, Pinecone, ChromaDB, OpenAI Embeddings"
    },
    {
      name: "SEC Financial ETL",
      description:
        "Airflow + DBT pipeline that extracts SEC datasets, validates schemas, and serves data via FastAPI and Streamlit.",
      url: "https://github.com/Asavari24/BigDataSystemsAssignment2",
      stack: "Airflow, DBT, Snowflake, FastAPI, Streamlit, AWS S3"
    }
  ]
};
