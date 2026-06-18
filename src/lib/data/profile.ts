export const profile = {
  name: 'Nguyen Quoc Huy',
  role: { vi: 'Front-end Developer', en: 'Front-end Developer' },
  email: 'huynq1705@gmail.com',
  phone: '0367697285',
  location: { vi: 'Cầu Giấy, Hà Nội', en: 'Cau Giay, Hanoi' },
  birthDate: '17/05/2001',
  github: 'https://github.com/huynq1705',
  linkedin: '',
  experienceYears: 3,
}

export type Experience = {
  period: { vi: string; en: string }
  role: { vi: string; en: string }
  company: { vi: string; en: string }
  description: { vi: string[]; en: string[] }
  tech: string[]
  projects: { vi: string[]; en: string[] }
}

export const experiences: Experience[] = [
  {
    period: { vi: '05/2025 – Hiện tại', en: 'May 2025 – Present' },
    role: { vi: 'Lập trình viên Front-end', en: 'Front-end Developer' },
    company: {
      vi: 'Công ty Cổ phần Công nghệ HDC-Flowtech',
      en: 'HDC-Flowtech Technology JSC',
    },
    description: {
      vi: [
        'Triển khai toàn bộ mã nguồn frontend cho hệ sinh thái MRAG Chat gồm 3 tầng ứng dụng: User (chat AI/RAG), Admin (cấu hình use case, knowledge base), Superadmin (quản trị multi-tenant, credit, provider)',
        'Phát triển MCBuilder — nền tảng AI tạo presentation: upload tài liệu/prompt, SSE streaming outline, trình chỉnh slide với TipTap/ProseMirror/Monaco, export PDF/PPTX',
        'Xây dựng hệ thống quản lý dự án đầu tư xây dựng — 22 module, RBAC 7 vai trò, OCR hợp đồng PDF, workflow phê duyệt, dashboard điều hành, trợ lý AI streaming',
        'Xây dựng UI chat streaming token-by-token, document viewer 5+ định dạng, agent processing tree, white-label branding cho 2000+ users tại Nhật Bản',
        'Tích hợp Redux Toolkit + React Query, i18next (EN/JA), Framer Motion cho micro-interactions',
        'Làm việc trực tiếp với nhóm Design, BA, Tester theo mô hình Agile Scrum',
      ],
      en: [
        'Full frontend implementation for the MRAG Chat ecosystem across 3 app tiers: User (AI/RAG chat), Admin (use case & knowledge base config), Superadmin (multi-tenant, credit, provider management)',
        'Developed MCBuilder — AI presentation platform: document/prompt upload, SSE streaming outline, slide editor with TipTap/ProseMirror/Monaco, PDF/PPTX export',
        'Built construction investment project management system — 22 modules, 7-role RBAC, PDF contract OCR, approval workflows, executive dashboard, streaming AI assistant',
        'Built streaming chat UI token-by-token, 5+ format document viewer, agent processing tree, white-label branding for 2000+ users in Japan',
        'Integrated Redux Toolkit + React Query, i18next (EN/JA), Framer Motion for micro-interactions',
        'Collaborated directly with Design, BA, and Tester teams in Agile Scrum',
      ],
    },
    tech: ['Next.js 16', 'React 19', 'Zustand', 'Redux Toolkit', 'TanStack Query', 'HeroUI', 'TipTap', 'Monaco', 'SSE', 'next-intl', 'Framer Motion'],
    projects: { vi: ['MRAG Chat Platform', 'MCBuilder', 'QLXD PM'], en: ['MRAG Chat Platform', 'MCBuilder', 'QLXD PM'] },
  },
  {
    period: { vi: '08/2024 – 05/2025', en: 'Aug 2024 – May 2025' },
    role: { vi: 'Lập trình viên Front-end', en: 'Front-end Developer' },
    company: {
      vi: 'Công ty Cổ phần Công nghệ Trí tuệ Nhân tạo PlusC.AI',
      en: 'PlusC.AI Artificial Intelligence Technology JSC',
    },
    description: {
      vi: [
        'Phát triển phần mềm quản lý đa ngành hàng Mitu CMS — website corporate tối ưu SEO và admin panel spa/salon 30+ module nghiệp vụ',
        'Xây dựng website corporate Next.js với URL SEO tiếng Việt, headless CMS blog, form lead generation, landing page phần mềm Spa',
        'Phát triển admin SPA: lịch hẹn drag-and-drop, POS bán hàng, CRM khách hàng, kho, báo cáo ECharts, RBAC multi-tenant',
        'Phát triển phần mềm quản lý vốn đầu tư HyraCap — giao diện dashboard, form quản lý danh mục đầu tư',
        'Làm việc trực tiếp với nhóm Design, BA, Tester theo Agile Scrum',
      ],
      en: [
        'Developed Mitu CMS multi-industry management — SEO-optimized corporate website and spa/salon admin panel with 30+ business modules',
        'Built Next.js corporate website with Vietnamese SEO URLs, headless CMS blog, lead generation forms, Spa software landing page',
        'Developed admin SPA: drag-and-drop scheduling, POS sales, customer CRM, inventory, ECharts reports, RBAC multi-tenant',
        'Developed HyraCap investment management software — dashboard UI, portfolio management forms',
        'Collaborated directly with Design, BA, and Tester teams in Agile Scrum',
      ],
    },
    tech: ['Next.js 14', 'React 18', 'Vite 5', 'MUI', 'Ant Design', 'Redux Toolkit', 'React Query', 'ECharts', 'Tailwind CSS', 'SCSS'],
    projects: { vi: ['Mitu CMS', 'Mitu Website', 'Mitu Admin', 'HyraCap'], en: ['Mitu CMS', 'Mitu Website', 'Mitu Admin', 'HyraCap'] },
  },
  {
    period: { vi: '07/2023 – 05/2025', en: 'Jul 2023 – May 2025' },
    role: { vi: 'Lập trình viên Front-end', en: 'Front-end Developer' },
    company: {
      vi: 'Công ty Cổ phần IKISOFT',
      en: 'IKISOFT JSC',
    },
    description: {
      vi: [
        'Xây dựng phần mềm quản lý trường mầm non OnCenter — giao diện quản lý học sinh, lớp học, phụ huynh, điểm danh',
        'Tích hợp mini app EZStudy vào hệ thống VNEdu Connect — UI tương tác, đồng bộ dữ liệu giữa các module',
        'Phát triển phần mềm quản lý nhân sự — form nhân viên, chấm công, phân quyền, báo cáo',
        'Hỗ trợ phát triển Mitu CMS và HyraCap trong giai đoạn đầu',
      ],
      en: [
        'Built OnCenter kindergarten management software — student, class, parent, and attendance management UI',
        'Integrated EZStudy mini app into VNEdu Connect system — interactive UI, data sync across modules',
        'Developed HR management software — employee forms, attendance, permissions, reports',
        'Supported early development of Mitu CMS and HyraCap',
      ],
    },
    tech: ['React', 'TypeScript', 'Redux', 'MUI', 'Tailwind CSS', 'SCSS'],
    projects: { vi: ['OnCenter', 'EZStudy', 'HR Management'], en: ['OnCenter', 'EZStudy', 'HR Management'] },
  },
  {
    period: { vi: '03/2023 – 07/2023', en: 'Mar 2023 – Jul 2023' },
    role: { vi: 'Thực tập sinh Front-end', en: 'Front-end Intern' },
    company: {
      vi: 'Công ty Cổ phần Tập đoàn APEC Group',
      en: 'APEC Group Corporation',
    },
    description: {
      vi: [
        'Xây dựng giao diện phần mềm quản lý đa ngành hàng Mitu CMS — module quản trị website và webapp',
        'Phát triển UI cho phần mềm quản lý vốn đầu tư HyraCap',
        'Tương tác với nhóm Back-end để ghép API, phối hợp Tester fix bug',
        'Sử dụng React, TypeScript, Redux, MUI, Tailwind CSS, SCSS',
      ],
      en: [
        'Built Mitu CMS multi-industry management UI — website and webapp admin modules',
        'Developed UI for HyraCap investment management software',
        'Collaborated with Back-end team for API integration, worked with Testers on bug fixes',
        'Used React, TypeScript, Redux, MUI, Tailwind CSS, SCSS',
      ],
    },
    tech: ['React', 'TypeScript', 'Redux', 'MUI', 'Tailwind CSS', 'SCSS'],
    projects: { vi: ['Mitu CMS', 'HyraCap'], en: ['Mitu CMS', 'HyraCap'] },
  },
]

export type FeaturedProject = {
  name: string
  slug?: string
  period: { vi: string; en: string }
  company: { vi: string; en: string }
  description: { vi: string; en: string }
  highlights: { vi: string[]; en: string[] }
  tech: string[]
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'MCBuilder',
    slug: 'mcbuilder',
    period: { vi: '09/2025 – Hiện tại', en: 'Sep 2025 – Present' },
    company: { vi: 'HDC-Flowtech', en: 'HDC-Flowtech' },
    description: {
      vi: 'Nền tảng SaaS AI cho phép người dùng tải tài liệu hoặc nhập prompt để tạo bài thuyết trình chuyên nghiệp trong vài phút. Hỗ trợ 3 chế độ tạo slide (Classic, Quick, Dynamic), chỉnh sửa inline với TipTap/ProseMirror, và export PDF/PPTX/Google Slides.',
      en: 'AI SaaS platform enabling users to upload documents or enter prompts to create professional presentations in minutes. Supports 3 slide creation modes (Classic, Quick, Dynamic), inline editing with TipTap/ProseMirror, and PDF/PPTX/Google Slides export.',
    },
    highlights: {
      vi: [
        '3 editor engines: TipTap, ProseMirror, Monaco — rich text & code editing trên slide',
        'Dynamic slide engine với semantic blocks, density modes, runtime JSX compilation (Babel + Recharts)',
        'SSE streaming cho AI generation & edit panel — UX realtime với progress steps, particles',
        'Multi-workspace, RBAC sharing, export server-side qua Puppeteer',
        'Monorepo Next.js 16 + React 19, Redux + React Query, i18n EN/JA',
      ],
      en: [
        '3 editor engines: TipTap, ProseMirror, Monaco — rich text & code editing on slides',
        'Dynamic slide engine with semantic blocks, density modes, runtime JSX compilation (Babel + Recharts)',
        'SSE streaming for AI generation & edit panel — realtime UX with progress steps, particles',
        'Multi-workspace, RBAC sharing, server-side export via Puppeteer',
        'Next.js 16 + React 19 monorepo, Redux + React Query, EN/JA i18n',
      ],
    },
    tech: ['Next.js 16', 'React 19', 'Redux Toolkit', 'TanStack Query', 'TipTap', 'ProseMirror', 'Monaco', 'Puppeteer', 'Framer Motion'],
  },
  {
    name: 'MRAG Chat Platform',
    slug: 'mrag-chat',
    period: { vi: '05/2025 – Hiện tại', en: 'May 2025 – Present' },
    company: { vi: 'HDC-Flowtech', en: 'HDC-Flowtech' },
    description: {
      vi: 'Hệ sinh thái chat AI/RAG enterprise gồm 3 tầng frontend: User (white-label chat cho doanh nghiệp), Admin (cấu hình AI assistant, knowledge base, widget nhúng), Superadmin (control plane multi-tenant). Hơn 2000 người dùng active tại thị trường Nhật Bản.',
      en: 'Enterprise AI/RAG chat ecosystem with 3 frontend tiers: User (white-label business chat), Admin (AI assistant config, knowledge base, embeddable widget), Superadmin (multi-tenant control plane). 2000+ active users in the Japanese market.',
    },
    highlights: {
      vi: [
        'SSE streaming token-by-token với typing animation & agent processing tree visualization',
        'Document viewer registry hỗ trợ PDF, DOCX, XLSX, PPTX, TXT — lazy load theo định dạng',
        'PreviewChat live trong admin form — test AI assistant realtime khi cấu hình use case',
        'Widget nhúng website với live theme preview, domain verification, embed code',
        'Credit economy, provider drag-reorder (GPT/Gemini/Claude), 400+ UI components tự xây',
      ],
      en: [
        'SSE token-by-token streaming with typing animation & agent processing tree visualization',
        'Document viewer registry supporting PDF, DOCX, XLSX, PPTX, TXT — lazy load by format',
        'Live PreviewChat in admin forms — realtime AI assistant testing during use case config',
        'Embeddable website widget with live theme preview, domain verification, embed code',
        'Credit economy, provider drag-reorder (GPT/Gemini/Claude), 400+ custom UI components',
      ],
    },
    tech: ['Next.js 15', 'React 19', 'Vite 7', 'Zustand', 'TanStack Query', 'TanStack Table', 'next-intl', 'pdfjs', 'Milkdown'],
  },
  {
    name: 'Mitu CMS',
    slug: 'mitu-cms',
    period: { vi: '07/2024 – 04/2025', en: 'Jul 2024 – Apr 2025' },
    company: { vi: 'PlusC.AI', en: 'PlusC.AI' },
    description: {
      vi: 'Giải pháp quản lý đa ngành hàng cho SME — gồm website corporate tối ưu SEO (production tại mitujsc.com) và admin panel spa/salon với 30+ module: lịch hẹn, POS, CRM, kho, báo cáo. Multi-tenant theo hostname, RBAC chi tiết.',
      en: 'Multi-industry management solution for SMEs — including SEO-optimized corporate website (production at mitujsc.com) and spa/salon admin panel with 30+ modules: scheduling, POS, CRM, inventory, reports. Hostname-based multi-tenant, detailed RBAC.',
    },
    highlights: {
      vi: [
        'Website: URL SEO tiếng Việt (301 redirect + rewrite), sitemap động, meta Zalo OG, headless CMS blog',
        'Form đăng ký subdomain realtime — check alias, provisioning API, Google Sheet integration',
        'Admin: lịch hẹn drag-and-drop theo nhân viên × khung giờ, POS đa bước, in hóa đơn',
        'CRM khách hàng multi-tab, dashboard ECharts, onboarding tour (react-joyride)',
        '650+ file TypeScript, 47 API service hooks, JWT refresh tự động',
      ],
      en: [
        'Website: Vietnamese SEO URLs (301 redirect + rewrite), dynamic sitemap, Zalo OG meta, headless CMS blog',
        'Realtime subdomain registration — alias check, provisioning API, Google Sheet integration',
        'Admin: drag-and-drop scheduling by staff × time slots, multi-step POS, invoice printing',
        'Multi-tab customer CRM, ECharts dashboard, onboarding tour (react-joyride)',
        '650+ TypeScript files, 47 API service hooks, auto JWT refresh',
      ],
    },
    tech: ['Next.js 14', 'React 18', 'Vite 5', 'MUI', 'Ant Design', 'Redux Toolkit', 'React Query', 'ECharts', 'Tailwind CSS'],
  },
  {
    name: 'QLXD PM',
    slug: 'qlxd',
    period: { vi: '2025 – Hiện tại', en: '2025 – Present' },
    company: { vi: 'HDC-Flowtech', en: 'HDC-Flowtech' },
    description: {
      vi: 'Hệ thống quản lý dự án đầu tư xây dựng enterprise: hợp đồng, công việc pháp lý, giải ngân, báo cáo tổng hợp, quy trình phê duyệt và dashboard điều hành. RBAC 7 vai trò, OCR hợp đồng PDF, trợ lý AI streaming.',
      en: 'Enterprise construction investment project management: contracts, legal tasks, disbursements, summary reports, approval workflows, and executive dashboards. 7-role RBAC, PDF contract OCR, streaming AI assistant.',
    },
    highlights: {
      vi: [
        '22 module nghiệp vụ, 117+ routes, middleware phân quyền theo role + locale',
        'OCR hợp đồng PDF với layout viewer và confirm modal trước khi lưu',
        'Workflow engine: cây bước phê duyệt, form template động, import Excel',
        'BFF Next.js 165+ API routes, TanStack Query infinite scroll',
        'Chatbot AI streaming tích hợp sidebar với feature flag theo tenant',
      ],
      en: [
        '22 business modules, 117+ routes, role + locale permission middleware',
        'PDF contract OCR with layout viewer and confirm modal before save',
        'Workflow engine: approval step tree, dynamic form templates, Excel import',
        'Next.js BFF with 165+ API routes, TanStack Query infinite scroll',
        'Streaming AI chatbot in sidebar with tenant feature flags',
      ],
    },
    tech: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'HeroUI', 'TanStack Query', 'Zustand', 'next-intl', 'Zod'],
  },
]

export const education = {
  school: { vi: 'Đại học Giao thông Vận tải', en: 'University of Transport and Communications' },
  major: {
    vi: 'Chuyên ngành Kỹ thuật Điện tử và Tin học Công nghiệp',
    en: 'Electronics Engineering and Industrial Informatics',
  },
}

export type SkillCategory = {
  label: { vi: string; en: string }
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: { vi: 'Core', en: 'Core' },
    items: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS'],
  },
  {
    label: { vi: 'Framework & Runtime', en: 'Framework & Runtime' },
    items: ['React 18/19', 'Next.js 14–16', 'Vite 5–7', 'React Native'],
  },
  {
    label: { vi: 'UI & Styling', en: 'UI & Styling' },
    items: ['Tailwind CSS', 'shadcn/ui', 'Radix UI', 'HeroUI', 'MUI', 'Ant Design', 'Framer Motion'],
  },
  {
    label: { vi: 'State & Data', en: 'State & Data' },
    items: ['Redux Toolkit', 'Zustand', 'TanStack React Query', 'TanStack React Table', 'React Hook Form', 'Zod'],
  },
  {
    label: { vi: 'Editors & Rich Content', en: 'Editors & Rich Content' },
    items: ['TipTap', 'ProseMirror', 'Monaco Editor', 'Milkdown', 'CKEditor', 'React Quill'],
  },
  {
    label: { vi: 'Realtime & AI UX', en: 'Realtime & AI UX' },
    items: ['SSE Streaming', 'WebSocket', 'Typing Animation', 'Agent Processing UI'],
  },
  {
    label: { vi: 'Charts & Documents', en: 'Charts & Documents' },
    items: ['ECharts', 'Recharts', 'ApexCharts', 'pdfjs', 'docx-preview', 'exceljs'],
  },
  {
    label: { vi: 'i18n & Tools', en: 'i18n & Tools' },
    items: ['i18next', 'next-intl', 'Git', 'Docker', 'GitLab CI', '@dnd-kit', 'Puppeteer'],
  },
]

export const about = {
  vi: 'Tôi có 3 năm kinh nghiệm ở vị trí Lập trình viên Frontend, chuyên xây dựng giao diện cho các sản phẩm AI SaaS enterprise và phần mềm quản lý. Đã triển khai frontend cho hệ sinh thái MRAG Chat (2000+ users), MCBuilder (AI presentation), hệ thống quản lý dự án xây dựng QLXD PM, và Mitu CMS (spa/salon management). Mục tiêu hướng tới Fullstack Developer trong 3–5 năm tới.',
  en: 'I have 3 years of experience as a Frontend Developer, specializing in AI SaaS enterprise products and management software. Implemented frontend for the MRAG Chat ecosystem (2000+ users), MCBuilder (AI presentations), QLXD PM construction project management, and Mitu CMS (spa/salon management). Aiming to become a Fullstack Developer within 3–5 years.',
}
