import React from 'react';
import App from '@layouts/App';
import { createRoot } from 'react-dom/client';

const rootNode = document.querySelector('#app');
const root = createRoot(rootNode!);
root.render(<App />);
