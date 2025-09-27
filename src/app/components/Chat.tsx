'use client';

import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { role: 'user', content: input }]);
      // TODO: Add AI response logic here
      setInput('');
    }
  };

  return (
    <div className="flex flex-col flex-1 w-full max-w-2xl border rounded-lg">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div key={index} className={`my-2 p-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 text-black self-start'}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="p-4 flex border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          className="flex-1 border rounded-lg p-2"
        />
        <button onClick={handleSendMessage} className="ml-2 bg-blue-500 text-white p-2 rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
}
