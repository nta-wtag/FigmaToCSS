const dataTableBody = document.querySelector('#dataTable tbody');
const totalCustomercount = document.getElementById('totalCustomerCount')
const activeMemberCount = document.getElementById('totalActiveMembers')
const filter = document.getElementById('filter')

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

        function updateCustomerCount(data){
            totalCustomercount.textContent = data.length
            activeMemberCount.textContent = data.filter(customer=> customer.status==='Active').length
        }

        function sortTable() {
            dataTableBody.innerHTML = ''
            const selectedStatus = filter.value;

            let filteredData = [...localJsonData]
            console.log(selectedStatus)
            if (selectedStatus =='country') {
                filteredData.sort((a, b) => {
                    const countryA = a.country.toLowerCase();
                    const countryB = b.country.toLowerCase();

                    return countryA.localeCompare(countryB);
                });
            }
            else if(selectedStatus==='company'){
                filteredData.sort((a, b) => {
                    const countryA = a.company.toLowerCase();
                    const countryB = b.company.toLowerCase();

                    return countryA.localeCompare(countryB);
                });
            }
            else if(selectedStatus==='name'){
                filteredData.sort((a, b) => {
                    const countryA = a.customerName.toLowerCase();
                    const countryB = b.customerName.toLowerCase();

                    return countryA.localeCompare(countryB);
                });
            }

            if (filteredData.length > 0) {
                filteredData.forEach(customer => addTableRowToDOM(customer));
            } else {
                console.log("No data matches the filter criteria.");
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            sortTable()
            updateCustomerCount(localJsonData)
        });

        filter.addEventListener('change', sortTable)