# React Vite 模板项目

一个功能完备的 React + Vite + TypeScript 现代化前端项目模板，集成了最新的开发工具和最佳实践。

## 📋 目录

- [技术栈](#技术栈)
- [项目结构](#项目结构)
- [快速开始](#快速开始)
- [可用脚本](#可用脚本)
- [路由配置](#路由配置)
- [数据请求](#数据请求)
- [状态管理](#状态管理)
- [样式方案](#样式方案)
- [代码规范](#代码规范)

## 🛠 技术栈

### 核心框架与工具

| 工具/框架                                         | 版本   | 说明                           |
| ------------------------------------------------- | ------ | ------------------------------ |
| **[React](https://react.dev/)**                   | 19.0.0 | 前端框架                       |
| **[Vite](https://vitejs.dev/)**                   | 6.3.5  | 构建工具，提供极速的开发体验   |
| **[TypeScript](https://www.typescriptlang.org/)** | 5.7.2  | 类型安全的 JavaScript 超集     |
| **[pnpm](https://pnpm.io/)**                      | -      | 包管理工具，快速且节省磁盘空间 |

### 路由方案

- **[TanStack Router](https://tanstack.com/router)** (1.130.2)
  - 类型安全的路由解决方案
  - 支持文件式路由
  - 内置数据加载器
  - 提供开发者工具 (TanStack Router Devtools)

### 状态管理

- **[Zustand](https://zustand-demo.pmnd.rs/)** (5.0.8)
  - 轻量级状态管理库
  - 简洁的 API 设计
  - 无需 Provider 包裹

### 样式方案

- **[Tailwind CSS](https://tailwindcss.com/)** (4.0.6)
  - 实用优先的 CSS 框架
  - 使用最新 v4 版本
  - 集成 Vite 插件 (@tailwindcss/vite)
- **[tw-animate-css](https://www.npmjs.com/package/tw-animate-css)** (1.3.8)
  - Tailwind 动画扩展
- **[clsx](https://github.com/lukeed/clsx)** (2.1.1) + **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** (3.3.1)
  - 条件类名组合与去重
- **[class-variance-authority](https://cva.style/docs)** (0.7.1)
  - 组件变体管理

### UI 组件库

- **[Radix UI](https://www.radix-ui.com/)** (@radix-ui/react-slot 1.2.3)
  - 无障碍的无样式组件
  - 与 shadcn/ui 配合使用
- **[Lucide React](https://lucide.dev/)** (0.544.0)
  - 精美的图标库

### HTTP 客户端

- **[Axios](https://axios-http.com/)** (1.12.2)
  - 强大的 HTTP 请求库
  - 支持请求/响应拦截器
  - 项目中已封装在 `src/lib/http.ts`

### 工具库

- **[qs](https://github.com/ljharb/qs)** (6.14.0)
  - 查询字符串解析与序列化
- **[web-vitals](https://github.com/GoogleChrome/web-vitals)** (4.2.4)
  - 网页性能指标监控

### 测试工具

- **[Vitest](https://vitest.dev/)** (通过 Vite 内置)
  - 快速的单元测试框架
  - 与 Vite 深度集成
- **[React Testing Library](https://testing-library.com/react)** (16.2.0)
  - React 组件测试工具
- **[jsdom](https://github.com/jsdom/jsdom)** (26.0.0)
  - DOM 环境模拟

### 代码质量工具

- **[ESLint](https://eslint.org/)** (9.35.0)
  - JavaScript/TypeScript 代码检查
  - 使用 @tanstack/eslint-config 配置
- **[Prettier](https://prettier.io/)** (3.5.3)
  - 代码格式化工具
- **[Husky](https://typicode.github.io/husky/)** (9.1.7)
  - Git hooks 管理
- **[lint-staged](https://github.com/lint-staged/lint-staged)** (16.1.6)
  - 只对暂存文件运行 linters
- **[Commitlint](https://commitlint.js.org/)** (19.8.1)
  - Git 提交信息规范检查
  - 使用 Conventional Commits 规范

### 开发者工具

- **TanStack Router Devtools** - 路由调试工具
- **TanStack React Devtools** - React 调试工具

## 📁 项目结构

```
react-vite-template/
├── public/                      # 静态资源目录
│   ├── manifest.json           # PWA 配置文件
│   └── robots.txt              # 搜索引擎爬虫配置
├── src/                        # 源代码目录
│   ├── api/                    # API 接口定义
│   │   └── index.ts           # API 接口导出
│   ├── assets/                 # 静态资源
│   │   └── imgs/              # 图片资源
│   │       └── 1.png
│   ├── components/             # 组件目录
│   │   ├── layout/            # 布局组件
│   │   │   └── index.tsx
│   │   └── ui/                # UI 基础组件 (shadcn/ui)
│   │       └── button.tsx     # 按钮组件
│   ├── constant/               # 常量定义
│   │   └── home.ts
│   ├── features/               # 功能模块 (页面级组件)
│   │   └── home.tsx
│   ├── lib/                    # 工具库
│   │   ├── http.ts            # HTTP 请求封装 (Axios)
│   │   └── utils.ts           # 通用工具函数
│   ├── routes/                 # 路由目录 (TanStack Router 文件式路由)
│   │   ├── __root.tsx         # 根路由组件
│   │   └── index.tsx          # 首页路由
│   ├── stores/                 # 状态管理 (Zustand)
│   │   └── home.ts            # 首页状态
│   ├── types/                  # TypeScript 类型定义
│   │   └── home.ts
│   ├── main.tsx                # 应用入口文件
│   ├── reportWebVitals.ts      # 性能监控
│   ├── routeTree.gen.ts        # 路由树 (自动生成)
│   └── styles.css              # 全局样式
├── components.json             # shadcn/ui 配置文件
├── eslint.config.js            # ESLint 配置
├── index.html                  # HTML 入口
├── package.json                # 项目依赖配置
├── pnpm-lock.yaml              # pnpm 依赖锁定文件
├── pnpm-workspace.yaml         # pnpm 工作空间配置
├── prettier.config.js          # Prettier 配置
├── tsconfig.json               # TypeScript 配置
├── vite.config.ts              # Vite 配置
└── README.md                   # 项目说明文档
```

## 🚀 快速开始

### 环境要求

- Node.js >= 18
- pnpm >= 8

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

项目将在 `http://localhost:3000` 启动。

### 生产构建

```bash
pnpm build
```

构建产物将输出到 `dist` 目录。

### 预览生产构建

```bash
pnpm serve
```

## 📜 可用脚本

| 命令            | 说明                               |
| --------------- | ---------------------------------- |
| `pnpm dev`      | 启动开发服务器 (端口 3000)         |
| `pnpm start`    | 同 `pnpm dev`                      |
| `pnpm build`    | 构建生产版本                       |
| `pnpm serve`    | 预览生产构建                       |
| `pnpm test`     | 运行测试                           |
| `pnpm lint`     | 运行 ESLint 检查                   |
| `pnpm lint:fix` | 自动修复 ESLint 问题               |
| `pnpm format`   | 运行 Prettier 格式化               |
| `pnpm check`    | 运行 Prettier 和 ESLint 并自动修复 |

## 🛣 路由配置

本项目使用 **TanStack Router** 的**文件式路由**，路由文件位于 `src/routes` 目录。

### 添加新路由

在 `src/routes` 目录下创建新的 `.tsx` 文件，TanStack Router 会自动生成路由配置。

例如，创建 `src/routes/about.tsx`：

```tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutComponent,
})

function AboutComponent() {
  return <div>关于页面</div>
}
```

### 路由导航

使用 `Link` 组件进行页面导航：

```tsx
import { Link } from '@tanstack/react-router'

function Nav() {
  return (
    <nav>
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>
    </nav>
  )
}
```

### 根布局

根布局位于 `src/routes/__root.tsx`，所有页面共享此布局。页面内容通过 `<Outlet />` 组件渲染。

```tsx
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <header>{/* 导航栏 */}</header>
      <main>
        <Outlet /> {/* 页面内容渲染位置 */}
      </main>
      <TanStackRouterDevtools /> {/* 开发工具 (生产环境不会打包) */}
    </>
  ),
})
```

### 路由数据加载

TanStack Router 支持在路由级别加载数据：

```tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users')({
  loader: async () => {
    const response = await fetch('https://api.example.com/users')
    return response.json()
  },
  component: UsersComponent,
})

function UsersComponent() {
  const users = Route.useLoaderData()
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
```

更多信息请查看 [TanStack Router 文档](https://tanstack.com/router/latest/docs/framework/react/overview)。

## 🌐 数据请求

### 使用封装的 HTTP 客户端

项目已在 `src/lib/http.ts` 中封装了 Axios 实例，建议使用该实例进行 HTTP 请求：

```typescript
import { http } from '@/lib/http'

// GET 请求
const data = await http.get('/api/users')

// POST 请求
const result = await http.post('/api/users', {
  name: '张三',
  email: 'zhangsan@example.com',
})
```

### API 接口定义

建议在 `src/api` 目录下定义 API 接口：

```typescript
// src/api/user.ts
import { http } from '@/lib/http'

export const userApi = {
  getList: () => http.get('/api/users'),
  getById: (id: string) => http.get(`/api/users/${id}`),
  create: (data: CreateUserDto) => http.post('/api/users', data),
  update: (id: string, data: UpdateUserDto) =>
    http.put(`/api/users/${id}`, data),
  delete: (id: string) => http.delete(`/api/users/${id}`),
}
```

### 可选：集成 TanStack Query

如需更强大的数据获取和缓存功能，可以集成 TanStack Query：

```bash
pnpm add @tanstack/react-query @tanstack/react-query-devtools
```

在 `src/main.tsx` 中配置：

```tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
)
```

使用示例：

```tsx
import { useQuery } from '@tanstack/react-query'
import { userApi } from '@/api/user'

function UserList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: userApi.getList,
  })

  if (isLoading) return <div>加载中...</div>
  if (error) return <div>加载失败</div>

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
```

## 🔄 状态管理

本项目使用 **Zustand** 进行状态管理。状态定义位于 `src/stores` 目录。

### 创建 Store

```typescript
// src/stores/counter.ts
import { create } from 'zustand'

interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}))
```

### 在组件中使用

```tsx
import { useCounterStore } from '@/stores/counter'

function Counter() {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <div>
      <p>计数: {count}</p>
      <button onClick={increment}>增加</button>
      <button onClick={decrement}>减少</button>
      <button onClick={reset}>重置</button>
    </div>
  )
}
```

### 持久化存储

如需将状态持久化到 localStorage：

```typescript
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'user-storage', // localStorage 的 key
    },
  ),
)
```

更多信息请查看 [Zustand 文档](https://zustand-demo.pmnd.rs/)。

## 🎨 样式方案

### Tailwind CSS

项目使用 Tailwind CSS v4 进行样式开发，配置已集成到 Vite 中。

```tsx
function Button() {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      点击我
    </button>
  )
}
```

### 工具函数

使用 `cn` 工具函数（位于 `src/lib/utils.ts`）合并类名：

```tsx
import { cn } from '@/lib/utils'

function Button({ className, ...props }) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded',
        'bg-blue-500 hover:bg-blue-600',
        'text-white font-medium',
        className,
      )}
      {...props}
    />
  )
}
```

### shadcn/ui 组件

项目集成了 shadcn/ui，可以通过以下命令添加组件：

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

组件将自动添加到 `src/components/ui` 目录。

### 组件变体管理

使用 `class-variance-authority` 创建带变体的组件：

```tsx
import { cva } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium',
  {
    variants: {
      variant: {
        default: 'bg-blue-500 text-white hover:bg-blue-600',
        outline: 'border border-blue-500 text-blue-500 hover:bg-blue-50',
        ghost: 'hover:bg-gray-100',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)
```

## ✅ 代码规范

### ESLint

项目使用 ESLint 进行代码检查，配置基于 `@tanstack/eslint-config`。

运行检查：

```bash
pnpm lint
```

自动修复：

```bash
pnpm lint:fix
```

### Prettier

项目使用 Prettier 进行代码格式化。

运行格式化：

```bash
pnpm format --write .
```

### Git Hooks

项目配置了以下 Git Hooks：

1. **pre-commit**: 使用 lint-staged，在提交前对暂存文件运行 ESLint
2. **commit-msg**: 使用 commitlint，检查提交信息是否符合规范

### 提交信息规范

项目使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```bash
# 格式
<type>(<scope>): <subject>

# 示例
feat(auth): 添加用户登录功能
fix(button): 修复按钮点击事件
docs(readme): 更新安装说明
style(header): 调整导航栏样式
refactor(api): 重构 API 请求层
test(user): 添加用户模块测试
chore(deps): 更新依赖版本
```

常用 type：

- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整（不影响功能）
- `refactor`: 重构代码
- `test`: 测试相关
- `chore`: 构建/工具相关

## 🧪 测试

### 运行测试

```bash
pnpm test
```

### 编写测试

在组件文件旁创建 `.test.tsx` 文件：

```tsx
// Button.test.tsx
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('应该渲染按钮文本', () => {
    render(<Button>点击我</Button>)
    expect(screen.getByText('点击我')).toBeInTheDocument()
  })

  it('应该响应点击事件', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>点击我</Button>)

    screen.getByText('点击我').click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

## 📚 相关文档

- [React 官方文档](https://react.dev/)
- [Vite 官方文档](https://vitejs.dev/)
- [TypeScript 官方文档](https://www.typescriptlang.org/)
- [TanStack Router 文档](https://tanstack.com/router/latest)
- [Zustand 文档](https://zustand-demo.pmnd.rs/)
- [Tailwind CSS 文档](https://tailwindcss.com/)
- [shadcn/ui 文档](https://ui.shadcn.com/)
- [Axios 文档](https://axios-http.com/)
- [Vitest 文档](https://vitest.dev/)

## 📄 许可证

MIT
