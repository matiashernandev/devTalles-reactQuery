import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppWa from "./AppWa";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</>
);
