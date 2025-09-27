import Chat from '@/app/components/Chat';

export default function Home() {
  return (
    <main className="flex flex-col items-center h-screen p-4">
      <h1 className="text-4xl font-bold mb-4">AI Drinking Game</h1>
      <Chat />
    </main>
  );
}