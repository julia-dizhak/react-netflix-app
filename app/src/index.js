import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, Switch, HashRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Word from './components/Word/';
import PaletteCard from './components/PaletteCard/';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const state = {
    documents: [
        {
            'token': '88261bc1-a6c9-4845-8ad0-09cb902c4f9b',
            'category': 'Personal documents',
            'document_name': 'Most recent tax statement (including real estate/debit/securities statement)',
            'customer_name': 'Test Online 2',
            'customer_info_id': 3963,
            'is_add_pages_available': true,
            'has_file': true,
            'is_additional_document': false,
            'api_download_url': '/en/api/v2/orders/517871/documents/88261bc1-a6c9-4845-8ad0-09cb902c4f9b/download/',
            'api_add_page_url': '/en/api/v2/orders/517871/documents/88261bc1-a6c9-4845-8ad0-09cb902c4f9b/add-page/',
            'api_delete_url': '/en/api/v2/orders/517871/documents/88261bc1-a6c9-4845-8ad0-09cb902c4f9b/',
            'api_upload_url': '/en/api/v2/orders/517871/documents/88261bc1-a6c9-4845-8ad0-09cb902c4f9b/upload/'
        },
        {
            'token': '1feb26c2-e9db-482a-b4d1-90e135460e14',
            'category': 'Personal documents',
            'document_name': 'Wage statement (last two years) including current payslip/pension statement',
            'customer_name': 'Test Online 2',
            'customer_info_id': 3963,
            'is_add_pages_available': false,
            'has_file': false,
            'is_additional_document': false,
            'api_download_url': '/en/api/v2/orders/517871/documents/1feb26c2-e9db-482a-b4d1-90e135460e14/download/',
            'api_add_page_url': '/en/api/v2/orders/517871/documents/1feb26c2-e9db-482a-b4d1-90e135460e14/add-page/',
            'api_delete_url': '/en/api/v2/orders/517871/documents/1feb26c2-e9db-482a-b4d1-90e135460e14/',
            'api_upload_url': '/en/api/v2/orders/517871/documents/1feb26c2-e9db-482a-b4d1-90e135460e14/upload/'
        },
        {
            'token': '1feb26c2-e9db-482a-b4d1-90e135460e14',
            'category': 'General',
            'document_name': 'Wage statement (last two years) including current payslip/pension statement',
            'customer_name': 'Test Online 2',
            'customer_info_id': 3963,
            'is_add_pages_available': false,
            'has_file': false,
            'is_additional_document': false,
            'api_download_url': '/en/api/v2/orders/517871/documents/1feb26c2-e9db-482a-b4d1-90e135460e14/download/',
            'api_add_page_url': '/en/api/v2/orders/517871/documents/1feb26c2-e9db-482a-b4d1-90e135460e14/add-page/',
            'api_delete_url': '/en/api/v2/orders/517871/documents/1feb26c2-e9db-482a-b4d1-90e135460e14/',
            'api_upload_url': '/en/api/v2/orders/517871/documents/1feb26c2-e9db-482a-b4d1-90e135460e14/upload/'
        }
    ]
}

const history = createHistory();

let destination =  document.getElementById("root");

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, 
    destination
);

registerServiceWorker();
