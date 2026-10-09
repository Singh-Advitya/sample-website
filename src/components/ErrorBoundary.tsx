import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0a0a0c] text-[#f4f5f7] flex items-center justify-center p-6 font-sans">
          <div className="max-w-md w-full rounded-2xl bg-[#14151b] border border-white/10 p-8 text-center shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-5 font-mono text-xl font-bold">
              !
            </div>
            <h1 className="text-xl font-bold text-white mb-2 tracking-tight">
              SAMPLE Experience Recovered
            </h1>
            <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
              An unexpected render issue was safely caught. The application prevented a crash.
            </p>
            <button
              onClick={this.handleReset}
              className="w-full py-3 px-5 rounded-lg bg-[#c8ff00] hover:bg-[#b0e600] text-black font-semibold text-sm transition-all duration-200 cursor-pointer shadow-lg shadow-[#c8ff00]/15"
            >
              Reload Experience
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
