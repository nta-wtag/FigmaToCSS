const dataTableBody = document.querySelector('#dataTable tbody');
const totalCustomerCount = document.getElementById('totalCustomerCount')
const totalActiveMemberCount = document.getElementById('totalActiveMembers')
const sort = document.getElementById('sort')

const ACTIVE = 'Active'

const customerData = [
    { "name": "Jane Cooper", "company": "Microsoft", "phoneNumber": "(225) 555-0118", "email": "jane@microsoft.com", "country": "United States", "status": "Active" },
    { "name": "Floyd Miles", "company": "Yahoo", "phoneNumber": "(205) 555-0100", "email": "floyd@yahoo.com", "country": "Timor-Leste", "status": "Inactive" },
    { "name": "Ronald Richards", "company": "Adobe", "phoneNumber": "(302) 555-0107", "email": "ronald@adobe.com", "country": "Paraguay", "status": "Active" },
    { "name": "Marvin McKinney", "company": "Tesla", "phoneNumber": "(252) 555-0126", "email": "marvin@tesla.com", "country": "Ireland", "status": "Inactive" },
    { "name": "Jerome Bell", "company": "Google", "phoneNumber": "(629) 555-0129", "email": "jerome@google.com", "country": "Vietnam", "status": "Active" },
    { "name": "Kathryn Murphy", "company": "Microsoft", "phoneNumber": "(406) 555-0120", "email": "kathryn@microsoft.com", "country": "Mexico", "status": "Active" },
    { "name": "Jacob Jones", "company": "Yahoo", "phoneNumber": "(208) 555-0112", "email": "jacob@yahoo.com", "country": "Brazil", "status": "Active" }
];

function addTableRowToDOM(data) {
    const row = dataTableBody.insertRow();

    const nameCell = row.insertCell();
    nameCell.textContent = data.name || '';

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
    totalCustomerCount.textContent = data.length
    totalActiveMemberCount.textContent = data.filter(customer=> customer.status===ACTIVE).length
}

function sorting(selectedOption){
    return function(a,b){
        const fieldA = a[selectedOption.toLowerCase()].toLowerCase();
        const fieldB = b[selectedOption.toLowerCase()].toLowerCase();
    
        return fieldA.localeCompare(fieldB)
    }
}

function sortTable() {
    dataTableBody.innerHTML = ''
    const selectedOption = sort.value;

    customerData.sort(sorting(selectedOption));

    if (customerData.length > 0) {
        customerData.forEach(customer => addTableRowToDOM(customer));
    } else {
        alert("No data matches the sort criteria.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    sortTable()
    updateCustomerCount(customerData)
});

filter.addEventListener('change', sortTable)