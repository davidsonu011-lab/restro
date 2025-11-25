import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { generateDashInsight } from '../services/geminiService';
import { ChatMessage, LoadingState } from '../types';

const AIChat: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hi! I'm DashBot. Ask me anything about DoorDash's business model, Project DASH, or safety initiatives.",
      timestamp: new Date()
    }
  ]);
  const [loading, setLoading] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading === LoadingState.LOADING) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(LoadingState.LOADING);

    const responseText = await generateDashInsight(userMessage.text);

    const botMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setLoading(LoadingState.IDLE);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="text-red-600" />
          <h2 className="text-2xl font-bold text-slate-900">Ask DashBot AI</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden flex flex-col h-[600px]">
          {/* Chat Window */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                  msg.role === 'user' ? 'bg-slate-200 text-slate-600' : 'bg-red-100 text-red-600'
                }`}>
                  {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                </div>
                
                <div className={`flex flex-col max-w-[80%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                   <div className={`px-5 py-3 rounded-2xl text-sm leading-relaxed ${
                     msg.role === 'user' 
                       ? 'bg-slate-900 text-white rounded-tr-none' 
                       : 'bg-slate-100 text-slate-800 rounded-tl-none'
                   }`}>
                     {msg.text}
                   </div>
                   <span className="text-[10px] text-slate-400 mt-1">
                     {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                   </span>
                </div>
              </div>
            ))}
            {loading === LoadingState.LOADING && (
              <div className="flex gap-4">
                 <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                   <Bot size={20} />
                 </div>
                 <div className="bg-slate-100 px-5 py-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about Project DASH, merchant benefits, or sustainability..."
                className="w-full pl-6 pr-14 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-slate-900 placeholder-slate-400 transition-all"
                disabled={loading === LoadingState.LOADING}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || loading === LoadingState.LOADING}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:hover:bg-red-600 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="text-center mt-2 text-xs text-slate-400">
              AI insights generated using Gemini 2.5 Flash. Information based on public DoorDash documentation.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChat;