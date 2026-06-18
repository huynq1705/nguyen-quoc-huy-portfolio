export type ProjectCategory = 'ai' | 'enterprise' | 'cms'

export type Project = {
  slug: string
  category: ProjectCategory
  featured: boolean
  period: { vi: string; en: string }
  title: { vi: string; en: string }
  tagline: { vi: string; en: string }
  description: { vi: string; en: string }
  highlights: { vi: string[]; en: string[] }
  tech: string[]
  role: { vi: string; en: string }
  problem: { vi: string; en: string }
  solution: { vi: string; en: string }
  impact: { vi: string[]; en: string[] }
  lessons: { vi: string[]; en: string[] }
}

export const projects: Project[] = [
  {
    slug: 'mcbuilder',
    category: 'ai',
    featured: true,
    period: { vi: '09/2025 – Hiện tại', en: 'Sep 2025 – Present' },
    title: { vi: 'MCBuilder', en: 'MCBuilder' },
    tagline: {
      vi: 'Nền tảng AI tạo presentation chuyên nghiệp',
      en: 'AI-powered professional presentation builder',
    },
    description: {
      vi: 'Ứng dụng web cho phép người dùng tải tài liệu hoặc nhập prompt, gọi API tạo bài thuyết trình (outline, stream), chỉnh sửa slide trực quan với biểu đồ, hình ảnh và bảng.',
      en: 'Web app that lets users upload documents or enter prompts, call AI APIs to generate presentations (outline, stream), and visually edit slides with charts, images, and tables.',
    },
    highlights: {
      vi: [
        '3 editor engines: TipTap, ProseMirror, Monaco',
        'Dynamic slide engine với semantic blocks',
        'Runtime JSX compilation (Babel + Recharts)',
        'SSE streaming AI generation & edit panel',
        'Export PDF/PPTX qua Puppeteer server-side',
        'Multi-workspace, RBAC sharing, i18n EN/JA',
      ],
      en: [
        '3 editor engines: TipTap, ProseMirror, Monaco',
        'Dynamic slide engine with semantic blocks',
        'Runtime JSX compilation (Babel + Recharts)',
        'SSE streaming AI generation & edit panel',
        'PDF/PPTX export via server-side Puppeteer',
        'Multi-workspace, RBAC sharing, EN/JA i18n',
      ],
    },
    tech: ['Next.js 16', 'React 19', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS', 'TipTap', 'Monaco', 'Framer Motion', 'Puppeteer'],
    role: {
      vi: 'Frontend Developer — phát triển giao diện tạo presentation, trình chỉnh slide, tích hợp streaming AI',
      en: 'Frontend Developer — presentation UI, slide editor, AI streaming integration',
    },
    problem: {
      vi: 'Doanh nghiệp cần tạo slide chuyên nghiệp nhanh từ tài liệu hoặc ý tưởng, nhưng các công cụ hiện có thiếu tích hợp AI streaming và khả năng chỉnh sửa inline phức tạp.',
      en: 'Enterprises need to quickly create professional slides from documents or ideas, but existing tools lack AI streaming integration and complex inline editing capabilities.',
    },
    solution: {
      vi: 'Xây dựng monorepo Next.js với 3 chế độ tạo slide (Classic, Quick, Dynamic), engine render semantic blocks, và UX streaming realtime cho quá trình AI generation.',
      en: 'Built a Next.js monorepo with 3 slide creation modes (Classic, Quick, Dynamic), semantic block rendering engine, and realtime streaming UX for AI generation.',
    },
    impact: {
      vi: [
        'Giảm thời gian tạo presentation từ giờ xuống vài phút',
        'Hỗ trợ export đa định dạng (PDF, PPTX, Google Slides)',
        'Tích hợp vào hệ sinh thái RAG chat',
      ],
      en: [
        'Reduced presentation creation time from hours to minutes',
        'Multi-format export support (PDF, PPTX, Google Slides)',
        'Integrated into the RAG chat ecosystem',
      ],
    },
    lessons: {
      vi: [
        'Quản lý state phức tạp cần hybrid Redux + React Query',
        'Streaming UX cần thiết kế riêng cho từng phase (outline → generate → edit)',
        'Runtime code compilation đòi hỏi validation và sandbox cẩn thận',
      ],
      en: [
        'Complex state needs hybrid Redux + React Query',
        'Streaming UX requires per-phase design (outline → generate → edit)',
        'Runtime code compilation demands careful validation and sandboxing',
      ],
    },
  },
  {
    slug: 'mrag-chat',
    category: 'ai',
    featured: true,
    period: { vi: '05/2025 – Hiện tại', en: 'May 2025 – Present' },
    title: { vi: 'MRAG Chat Platform', en: 'MRAG Chat Platform' },
    tagline: {
      vi: 'Hệ sinh thái chat AI/RAG enterprise — User, Admin, Superadmin',
      en: 'Enterprise AI/RAG chat ecosystem — User, Admin, Superadmin',
    },
    description: {
      vi: 'Bộ 3 ứng dụng frontend cho nền tảng RAG: chat end-user (white-label), admin cấu hình AI assistant, superadmin quản trị multi-tenant. Hơn 2000 người dùng tại thị trường Nhật Bản.',
      en: 'A 3-app frontend suite for a RAG platform: white-label end-user chat, admin AI assistant configuration, and superadmin multi-tenant management. 2000+ users in the Japanese market.',
    },
    highlights: {
      vi: [
        'SSE streaming token-by-token với typing animation',
        'Agent processing tree visualization',
        'Document viewer 5+ định dạng (PDF, DOCX, XLSX, PPTX)',
        'PreviewChat live trong admin form',
        'Credit economy & multi-tenant control plane',
        'Widget nhúng website với live theme preview',
      ],
      en: [
        'SSE token-by-token streaming with typing animation',
        'Agent processing tree visualization',
        'Document viewer for 5+ formats (PDF, DOCX, XLSX, PPTX)',
        'Live PreviewChat in admin forms',
        'Credit economy & multi-tenant control plane',
        'Embeddable website widget with live theme preview',
      ],
    },
    tech: ['Next.js 15', 'React 19', 'Vite 7', 'Zustand', 'TanStack Query', 'TanStack Table', 'next-intl', 'Framer Motion', 'pdfjs', 'Milkdown'],
    role: {
      vi: 'Frontend Developer — triển khai toàn bộ mã nguồn frontend cho 3 tầng ứng dụng, từ routing đến UI module và tích hợp API',
      en: 'Frontend Developer — full frontend implementation across 3 app tiers, from routing to UI modules and API integration',
    },
    problem: {
      vi: 'Doanh nghiệp cần chatbot AI dựa trên knowledge base riêng, với khả năng cấu hình linh hoạt, quản trị multi-tenant và trải nghiệm streaming realtime.',
      en: 'Enterprises need AI chatbots based on private knowledge bases, with flexible configuration, multi-tenant management, and realtime streaming experience.',
    },
    solution: {
      vi: 'Xây dựng 3 tầng UI: User (chat streaming + document preview), Admin (use case config + live preview), Superadmin (tenant/credit/provider management).',
      en: 'Built 3 UI tiers: User (streaming chat + document preview), Admin (use case config + live preview), Superadmin (tenant/credit/provider management).',
    },
    impact: {
      vi: [
        '2000+ người dùng active tại thị trường Nhật Bản',
        '400+ UI components tự xây dựng',
        '34+ API service modules tích hợp',
      ],
      en: [
        '2000+ active users in the Japanese market',
        '400+ custom-built UI components',
        '34+ integrated API service modules',
      ],
    },
    lessons: {
      vi: [
        'Zustand selector pattern tối ưu re-render cho chat streaming',
        'Document viewer registry pattern giúp mở rộng định dạng dễ dàng',
        'Cross-tab auth sync cần thiết cho enterprise apps',
      ],
      en: [
        'Zustand selector pattern optimizes re-renders for chat streaming',
        'Document viewer registry pattern enables easy format extension',
        'Cross-tab auth sync is essential for enterprise apps',
      ],
    },
  },
  {
    slug: 'mitu-cms',
    category: 'cms',
    featured: true,
    period: { vi: '07/2024 – 04/2025', en: 'Jul 2024 – Apr 2025' },
    title: { vi: 'Mitu CMS', en: 'Mitu CMS' },
    tagline: {
      vi: 'Giải pháp quản lý đa ngành hàng cho SME',
      en: 'Multi-industry management solution for SMEs',
    },
    description: {
      vi: 'Hệ thống quản lý đa ngành hàng gồm website corporate (SEO-optimized) và admin panel cho spa/salon với 30+ module nghiệp vụ.',
      en: 'Multi-industry management system including an SEO-optimized corporate website and spa/salon admin panel with 30+ business modules.',
    },
    highlights: {
      vi: [
        'Website corporate với URL SEO tiếng Việt & sitemap động',
        'Headless CMS blog + form lead generation',
        'Admin SPA: lịch hẹn drag-and-drop, POS, CRM',
        'Multi-tenant theo hostname, RBAC chi tiết',
        'Dashboard ECharts & báo cáo doanh thu',
      ],
      en: [
        'Corporate website with Vietnamese SEO URLs & dynamic sitemap',
        'Headless CMS blog + lead generation forms',
        'Admin SPA: drag-and-drop scheduling, POS, CRM',
        'Hostname-based multi-tenant, detailed RBAC',
        'ECharts dashboard & revenue reports',
      ],
    },
    tech: ['Next.js 14', 'React 18', 'Vite 5', 'TypeScript', 'MUI', 'Ant Design', 'Redux Toolkit', 'React Query', 'Tailwind CSS', 'ECharts'],
    role: {
      vi: 'Frontend Developer — xây dựng giao diện website và admin panel, tích hợp API, tối ưu SEO',
      en: 'Frontend Developer — website and admin panel UI, API integration, SEO optimization',
    },
    problem: {
      vi: 'Doanh nghiệp spa/salon SME cần website giới thiệu chuyên nghiệp kết hợp phần mềm quản lý vận hành toàn diện.',
      en: 'Spa/salon SME businesses need a professional marketing website combined with comprehensive operations management software.',
    },
    solution: {
      vi: 'Phát triển website corporate (Next.js + headless CMS + SEO Việt Nam) và admin SPA (React + MUI/Ant Design) với module lịch hẹn, POS, CRM.',
      en: 'Developed corporate website (Next.js + headless CMS + Vietnamese SEO) and admin SPA (React + MUI/Ant Design) with scheduling, POS, and CRM modules.',
    },
    impact: {
      vi: [
        '20+ routes website với URL thân thiện SEO',
        '30+ module nghiệp vụ admin',
        '650+ file TypeScript trong admin panel',
      ],
      en: [
        '20+ website routes with SEO-friendly URLs',
        '30+ admin business modules',
        '650+ TypeScript files in admin panel',
      ],
    },
    lessons: {
      vi: [
        'Hybrid MUI + Ant Design cần design tokens thống nhất',
        'SEO Việt Nam đòi hỏi URL rewrite + meta Zalo OG',
        'POS wizard cần React Context cho state phức tạp',
      ],
      en: [
        'Hybrid MUI + Ant Design needs unified design tokens',
        'Vietnamese SEO requires URL rewrites + Zalo OG meta',
        'POS wizard needs React Context for complex state',
      ],
    },
  },
  {
    slug: 'mitu-website',
    category: 'cms',
    featured: false,
    period: { vi: '07/2024 – 04/2025', en: 'Jul 2024 – Apr 2025' },
    title: { vi: 'Mitu Corporate Website', en: 'Mitu Corporate Website' },
    tagline: {
      vi: 'Website doanh nghiệp tối ưu SEO cho thị trường Việt Nam',
      en: 'SEO-optimized corporate website for the Vietnamese market',
    },
    description: {
      vi: 'Website giới thiệu doanh nghiệp và sản phẩm, tích hợp headless CMS cho blog/tin tức, form lead generation và landing page phần mềm Spa.',
      en: 'Corporate and product showcase website with headless CMS for blog/news, lead generation forms, and Spa software landing page.',
    },
    highlights: {
      vi: [
        'URL SEO tiếng Việt (redirect 301 + rewrite)',
        'Sitemap động fetch blog tại build time',
        'Meta Zalo OG cho chia sẻ mạng xã hội VN',
        'Form đăng ký subdomain realtime',
        '80+ components, 20+ routes',
      ],
      en: [
        'Vietnamese SEO URLs (301 redirect + rewrite)',
        'Dynamic sitemap fetching blog at build time',
        'Zalo OG meta for Vietnamese social sharing',
        'Realtime subdomain registration form',
        '80+ components, 20+ routes',
      ],
    },
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'SCSS Modules', 'Ant Design', 'next-sitemap', 'GA4'],
    role: {
      vi: 'Frontend Developer — phát triển giao diện multi-page, tích hợp REST API, SEO on-page',
      en: 'Frontend Developer — multi-page UI, REST API integration, on-page SEO',
    },
    problem: {
      vi: 'Công ty cần website corporate chuyên nghiệp, thân thiện SEO tiếng Việt, tích hợp CMS và form thu lead.',
      en: 'Company needed a professional corporate website, Vietnamese SEO-friendly, with CMS and lead capture forms.',
    },
    solution: {
      vi: 'Xây dựng Next.js multi-page với dual routing SEO, headless CMS blog, API routes proxy form, và landing page Spa với flow đăng ký subdomain.',
      en: 'Built Next.js multi-page with dual SEO routing, headless CMS blog, form proxy API routes, and Spa landing with subdomain registration flow.',
    },
    impact: {
      vi: [
        'Production tại domain chính thức',
        'Tích hợp GA4 analytics',
        'Docker multi-stage deploy',
      ],
      en: [
        'Production on official domain',
        'GA4 analytics integration',
        'Docker multi-stage deployment',
      ],
    },
    lessons: {
      vi: [
        'next-sitemap additionalPaths cho blog động',
        'Form proxy pattern che Google Apps Script URL',
        'Hybrid Tailwind + SCSS modules cho layout phức tạp',
      ],
      en: [
        'next-sitemap additionalPaths for dynamic blog',
        'Form proxy pattern hides Google Apps Script URLs',
        'Hybrid Tailwind + SCSS modules for complex layouts',
      ],
    },
  },
  {
    slug: 'mitu-admin',
    category: 'enterprise',
    featured: false,
    period: { vi: '07/2024 – 04/2025', en: 'Jul 2024 – Apr 2025' },
    title: { vi: 'Mitu Admin Panel', en: 'Mitu Admin Panel' },
    tagline: {
      vi: 'Nền tảng quản trị spa/salon đa chi nhánh',
      en: 'Multi-branch spa/salon management platform',
    },
    description: {
      vi: 'Admin SPA quản lý spa/salon với lịch hẹn kéo-thả, POS bán hàng, CRM khách hàng, kho, báo cáo và phân quyền RBAC.',
      en: 'Spa/salon admin SPA with drag-and-drop scheduling, POS sales, customer CRM, inventory, reports, and RBAC permissions.',
    },
    highlights: {
      vi: [
        'Lịch hẹn drag-and-drop theo nhân viên × khung giờ',
        'POS đa bước: tạo đơn → thanh toán → in hóa đơn',
        'CRM khách hàng multi-tab (công nợ, liệu trình, sức khỏe)',
        'JWT refresh tự động, multi-tenant theo hostname',
        'Onboarding tour tương tác (react-joyride)',
      ],
      en: [
        'Drag-and-drop scheduling by staff × time slots',
        'Multi-step POS: create order → payment → print invoice',
        'Multi-tab customer CRM (debt, treatments, health)',
        'Auto JWT refresh, hostname-based multi-tenant',
        'Interactive onboarding tour (react-joyride)',
      ],
    },
    tech: ['React 18', 'Vite 5', 'TypeScript', 'MUI', 'Ant Design', 'Redux Toolkit', 'React Query', 'ECharts', 'Firebase', 'i18next'],
    role: {
      vi: 'Frontend Developer — phát triển module nghiệp vụ, tích hợp API, responsive mobile',
      en: 'Frontend Developer — business module development, API integration, mobile responsive',
    },
    problem: {
      vi: 'Chuỗi spa/salon cần phần mềm quản lý toàn diện: lịch hẹn, bán hàng, CRM, kho — trên cả desktop và mobile.',
      en: 'Spa/salon chains need comprehensive management: scheduling, sales, CRM, inventory — on both desktop and mobile.',
    },
    solution: {
      vi: 'Xây dựng admin SPA modular với 30+ module, pattern CRUD lặp lại, lịch kéo-thả custom grid, và responsive card view cho mobile.',
      en: 'Built modular admin SPA with 30+ modules, repeatable CRUD pattern, custom drag-and-drop calendar grid, and responsive card view for mobile.',
    },
    impact: {
      vi: [
        '650+ file TypeScript',
        '47 API service hooks',
        'Trang công khai đặt lịch/đánh giá không cần login',
      ],
      en: [
        '650+ TypeScript files',
        '47 API service hooks',
        'Public booking/review pages without login',
      ],
    },
    lessons: {
      vi: [
        'Route loader defer pattern cho auth flow mượt',
        'URL-driven state (filter, pagination) qua searchParams',
        'Input-custom-v2 library giảm inconsistency form',
      ],
      en: [
        'Route loader defer pattern for smooth auth flow',
        'URL-driven state (filter, pagination) via searchParams',
        'Input-custom-v2 library reduces form inconsistency',
      ],
    },
  },
  {
    slug: 'qlxd',
    category: 'enterprise',
    featured: true,
    period: { vi: '2025 – Hiện tại', en: '2025 – Present' },
    title: {
      vi: 'Hệ thống quản lý dự án đầu tư xây dựng',
      en: 'Construction Investment Project Management',
    },
    tagline: {
      vi: 'Nền tảng enterprise quản lý vòng đời dự án xây dựng',
      en: 'Enterprise platform for construction project lifecycle management',
    },
    description: {
      vi: 'Ứng dụng web quản lý toàn diện dự án đầu tư xây dựng: hợp đồng, công việc, giải ngân, báo cáo tổng hợp, quy trình phê duyệt và dashboard điều hành. Hỗ trợ 7 vai trò người dùng với routing theo quyền, OCR hợp đồng PDF và trợ lý AI streaming.',
      en: 'Comprehensive web app for construction investment projects: contracts, tasks, disbursements, summary reports, approval workflows, and executive dashboards. Supports 7 user roles with permission-based routing, PDF contract OCR, and streaming AI assistant.',
    },
    highlights: {
      vi: [
        '22 module nghiệp vụ, 117+ routes, RBAC 7 vai trò (admin, user, kế toán, chủ đầu tư…)',
        'OCR hợp đồng PDF — trích xuất nhà thầu, giá trị, điều khoản vào form tự động',
        'Workflow engine: cây bước phê duyệt, form template động, import Excel',
        'Dashboard điều hành + báo cáo tổng hợp, giải ngân, kế hoạch tháng',
        'Trợ lý AI chatbot streaming tích hợp sidebar, feature flag theo tenant',
        'BFF Next.js 165+ API routes, TanStack Query infinite scroll, Zustand stores',
      ],
      en: [
        '22 business modules, 117+ routes, RBAC with 7 roles (admin, user, accounting, investor…)',
        'PDF contract OCR — auto-extract contractors, values, clauses into forms',
        'Workflow engine: approval step tree, dynamic form templates, Excel import',
        'Executive dashboard + summary reports, disbursements, monthly plans',
        'Streaming AI chatbot assistant in sidebar, tenant feature flags',
        'Next.js BFF with 165+ API routes, TanStack Query infinite scroll, Zustand stores',
      ],
    },
    tech: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'HeroUI', 'TanStack Query', 'Zustand', 'next-intl', 'Zod', 'React Hook Form'],
    role: {
      vi: 'Frontend Developer — phát triển module nghiệp vụ, OCR UI, workflow forms, tích hợp BFF',
      en: 'Frontend Developer — business modules, OCR UI, workflow forms, BFF integration',
    },
    problem: {
      vi: 'Tổ chức quản lý nhiều dự án xây dựng cần hệ thống thống nhất: theo dõi hợp đồng, công việc pháp lý, giải ngân, báo cáo — với phân quyền phức tạp theo vai trò.',
      en: 'Organizations managing multiple construction projects need a unified system: contract tracking, legal tasks, disbursements, reports — with complex role-based permissions.',
    },
    solution: {
      vi: 'Xây dựng Next.js App Router với routing theo locale + role, feature modules theo domain (projects, tasks, workflows, disbursements), OCR viewer tích hợp form, và chatbot AI streaming.',
      en: 'Built Next.js App Router with locale + role routing, domain feature modules (projects, tasks, workflows, disbursements), OCR viewer integrated with forms, and streaming AI chatbot.',
    },
    impact: {
      vi: [
        '82.000+ dòng code TypeScript',
        '117+ routes, 22 module nghiệp vụ',
        '165+ BFF API routes',
      ],
      en: [
        '82,000+ lines of TypeScript',
        '117+ routes, 22 business modules',
        '165+ BFF API routes',
      ],
    },
    lessons: {
      vi: [
        'Role-scoped middleware cần đồng bộ với cookie JWT refresh',
        'OCR confirm flow: preview layout + field mapping trước khi lưu',
        'Infinite query + URL searchParams cho danh sách dự án lớn',
      ],
      en: [
        'Role-scoped middleware must sync with JWT refresh cookies',
        'OCR confirm flow: layout preview + field mapping before save',
        'Infinite query + URL searchParams for large project lists',
      ],
    },
  },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)

export const featuredProjects = projects.filter((p) => p.featured)
