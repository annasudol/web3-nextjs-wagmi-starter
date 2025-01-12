# Web3 Nextjs Frontend Starter
A modern, type-safe, and user-friendly frontend template for startering web3 project Ethereum. Built with Next.js 14, TypeScript, Tailwind CSS, and wagmi v2, wagmi cli.
![alt web3 starter](https://github.com/annasudol/web3-nextjs-wagmi-starter/blob/main/public/app.png)


# Table of content

## 🌟 Features

- **Type-Safe Contract Interactions**: Fully typed smart contract interactions using wagmi v2
- **Modern Stack**: Built on Next.js 14 with App Router and Server Components
- **Responsive Design**: Mobile-first UI built with Tailwind CSS and NextUI
- **Wallet Integration**: Seamless wallet connection with RainbowKit
- **State Management**: React Query for server state and React Context for local state
- **Developer Experience**:
  - TypeScript for type safety
  - ESLint and Prettier for code quality
  - Husky for git hooks

## 🚀 Quick Start

1. Clone the repository:

```bash
git clone https://github.com/annasudol/web3-nextjs-wagmi-starter
cd ceb3-nextjs-wagmi-starter
```

2. Install dependencies:

```bash
pnpm install
```

This will install all the dependencies

3. Create a `.env` file and add your environment variables:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
pnpm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to see the application.

```
## 📁 Project Structure

```sh
src/
├── components/ project components
├── config/ # project configurations
│ ├── wagmi-cli/ # wagmi codegen
| ├── rainbowConfig.ts # RainbowKit config
| ├── siteConfig.ts # Site configuration
├── lib/ # Utility functions
| ├── format/ # Formatting functions
| ├── wagmi-cli/ # wagmi codegen
| ├── envs.ts # Environment variables
| ├── logger.ts # Logger
| ├── zod.ts # Zod schemas for environment variables
└── providers/ # App level providers
```

## 🛠 Configuration

### Smart Contract Integration

The project uses wagmi CLI for type-safe contract interactions. Contract ABIs and hooks are auto-generated:

[Generated Lines 1-50](https://github.com/annasudol/web3-nextjs-wagmi-starter/blob/main/src/config/wagmi-cli/wagmiGenerated.ts)

## 🌟 Smart Contract used in the app
 
### 0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c
[contract at sepolia.etherscan.io] (https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)


## 📦 Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build production bundle
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint
- `pnpm run format` - Format code with Prettier
- `pnpm run codegen` - Generate Wagmi hooks and ABI  are auto-generated:

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using conventional commits
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- [wagmi](https://wagmi.sh) for the Ethereum development toolkit
- [RainbowKit](https://www.rainbowkit.com/) for the wallet connection UI
- [nextui](https://nextui.org/) for the component library


