import { Component, type ErrorInfo, type ReactNode } from "react";

// ErrorBoundary.tsx
class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("Xatolik:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg m-4">
          <h2 className="text-lg font-semibold text-red-800">
            Xatolik yuz berdi!
          </h2>
          <p className="text-red-600">
            Ma'lumotlarni ko'rsatishda xatolik. Iltimos, qayta yuklang.
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Qayta urinish
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
