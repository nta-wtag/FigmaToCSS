const dataTableBody = document.querySelector('#dataTable tbody');

        const localJsonData = [
            { "customerName": "Jane Cooper", "company": "Microsoft", "phoneNumber": "(225) 555-0118", "email": "jane@microsoft.com", "country": "United States", "status": "Active" },
            { "customerName": "Floyd Miles", "company": "Yahoo", "phoneNumber": "(205) 555-0100", "email": "floyd@yahoo.com", "country": "Timor-Leste", "status": "Inactive" },
            { "customerName": "Ronald Richards", "company": "Adobe", "phoneNumber": "(302) 555-0107", "email": "ronald@adobe.com", "country": "Paraguay", "status": "Active" },
            { "customerName": "Marvin McKinney", "company": "Tesla", "phoneNumber": "(252) 555-0126", "email": "marvin@tesla.com", "country": "Ireland", "status": "Inactive" },
            { "customerName": "Jerome Bell", "company": "Google", "phoneNumber": "(629) 555-0129", "email": "jerome@google.com", "country": "Vietnam", "status": "Active" },
            { "customerName": "Kathryn Murphy", "company": "Microsoft", "phoneNumber": "(406) 555-0120", "email": "kathryn@microsoft.com", "country": "Mexico", "status": "Active" },
            { "customerName": "Jacob Jones", "company": "Yahoo", "phoneNumber": "(208) 555-0112", "email": "jacob@yahoo.com", "country": "Brazil", "status": "Active" }
        ];

        function addTableRowToDOM(data) {
            const row = dataTableBody.insertRow();

            const nameCell = row.insertCell();
            nameCell.textContent = data.customerName || '';

            const companyCell = row.insertCell();
            companyCell.textContent = data.company || '';

            const phoneCell = row.insertCell();
            phoneCell.textContent = data.phoneNumber || '';

            const emailCell = row.insertCell();
            emailCell.textContent = data.email || '';

            const countryCell = row.insertCell();
            countryCell.textContent = data.country || '';

            const statusCell = row.insertCell();
            statusCell.textContent = data.status || '';
            statusCell.classList.add(data.status ? data.status.toLowerCase() : '');
        }

        document.addEventListener('DOMContentLoaded', () => {
            if (localJsonData && localJsonData.length > 0) {
                localJsonData.forEach(item => addTableRowToDOM(item));
            }
        });