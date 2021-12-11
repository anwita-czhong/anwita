import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div className="flex flex-col gap-4 w-full h-full bg-red-100 p-8 rounded-md justify-center items-center">
          <h2 className="text-red-700 text-2xl">Something went wrong.</h2>
          <p className="text-red-700">Please try again.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
