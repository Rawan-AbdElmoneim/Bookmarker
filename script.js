nameInput = document.getElementById("name");
urlInput = document.getElementById("url");
table = document.getElementById("table");
const alert = document.getElementById("Alert");
const message = document.getElementById("Message");
const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

let siteCount = 0;
let tbody = null;
let recordToUpdate = null;

document.getElementById("submit-btn").addEventListener("click", () => {
    const siteName = nameInput.value.trim();
    const siteURL = urlInput.value.trim();


    if (!siteName && !siteURL) {
        message.textContent = "Please enter the site name and URL!";
        alert.style.display = "flex";
        return;
    }
    if (!siteName) {
        message.textContent = "Please enter a site name";
        alert.style.display = "flex";
        return;
    }
    if (!siteURL) {
        message.textContent = "Please enter a site URL";
        alert.style.display = "flex";
        return;
    }

    if (!urlPattern.test(siteURL)) {
        message.textContent = "Please enter a valid URL!";
        alert.style.display = "flex";
        return;
    }

    if (!tbody) {
        tbody = document.createElement("tbody");
        table.appendChild(tbody);
    }


    if (recordToUpdate) {
        recordToUpdate.querySelector(".websiteName").textContent = siteName;
        recordToUpdate.querySelector(".visit-btn").onclick = () => {
            let validUrl;
            if (siteURL.startsWith("http")) {
                validUrl = siteURL;
            }
            else {
                validUrl = "https://" + siteURL;
            }
            window.open(validUrl);
        };

        recordToUpdate = null;
        nameInput.value = "";
        urlInput.value = "";
        return;
    }

    siteCount++;
    let record = document.createElement("tr");
    record.innerHTML = `
                    <th scope="row">${siteCount}</th>
                    <td class="websiteName">${siteName}</td>
                    <td><button class="table-btn visit-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                height="20" viewBox="0 0 24 24">
                                <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M10.25 3.75h-2.5a4 4 0 0 0-4 4v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-2.5m-6.5-10h5.5c.276 0 .526.112.707.293m.293 6.207v-5.5a1 1 0 0 0-.293-.707M12.75 11.25l6.5-6.5l.707-.707" />
                            </svg> visit</button></td>
                    <td><button class="table-btn update-btn"><svg width="20" height="20"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="#000000"
                                    d="M20.954 7.662c-.021-.05-.172-.196-.172-.196l-.113-.119l-1.893-1.974s-.173-.169-.216-.202a.63.63 0 0 0-.357-.108c-.124 0-.316.134-.393.23c-.072.092-.132.268-.093.378a1.6 1.6 0 0 0 .155.223l1.37 1.363l-3.555.002l-.202-.01s-.502.079-.635.124c-.196.067-.415.22-.573.353c-.047.04-.217.232-.217.232l-2.28 2.616l.72.721l2.218-2.462s.194-.199.237-.234c.145-.117.3-.236.48-.28c.06-.014.328-.025.328-.025h3.296l-1.065 1.09s-.158.2-.174.235c-.054.112-.071.312-.016.423c.042.083.176.225.27.239c.123.017.255.047.363-.017c.04-.024.198-.16.198-.16l2.11-2.109s.163-.131.193-.193c.02-.041.035-.099.018-.142zM9.891 12.74l-2.066 2.37s-.242.249-.293.293a1.4 1.4 0 0 1-.454.282a4 4 0 0 1-.416.067l-2.91.026s-.27.018-.315.027a.67.67 0 0 0-.34.22c-.094.112-.07.37.008.494c.069.107.258.183.385.2c.042.006.246.016.246.016h3.08s.381-.039.442-.064a2.6 2.6 0 0 0 .728-.43c.087-.07.497-.484.497-.484l2.096-2.328zM3.49 7.28c.042-.006.246-.016.246-.016h3.079s.382.039.443.064c.301.127.48.228.728.43c.087.07.497.484.497.484l6.232 6.922s.194.2.238.234c.145.117.299.237.48.28c.06.015.328.025.328.025h3.295l-1.065-1.09s-.158-.199-.174-.234c-.054-.112-.07-.312-.015-.423c.042-.083.176-.226.269-.239c.124-.017.255-.047.364.017c.04.024.198.16.198.16l2.11 2.109s.162.131.192.193c.02.04.035.099.018.142c-.02.05-.17.197-.17.197l-.114.118l-1.893 1.974s-.173.17-.216.202a.63.63 0 0 1-.357.108c-.124 0-.316-.134-.393-.23c-.072-.092-.132-.268-.093-.378a1.6 1.6 0 0 1 .155-.223l1.37-1.363l-3.555-.002l-.202.01s-.502-.079-.635-.124c-.196-.067-.415-.22-.573-.353a5 5 0 0 1-.217-.232l-6.235-7.15s-.242-.248-.293-.293a1.4 1.4 0 0 0-.454-.282c-.053-.022-.416-.066-.416-.066l-2.91-.027s-.27-.018-.315-.026a.67.67 0 0 1-.34-.221c-.095-.111-.07-.37.008-.493c.069-.108.258-.184.385-.2zM12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0m0 1.295A10.705 10.705 0 0 1 22.705 12A10.705 10.705 0 0 1 12 22.705A10.705 10.705 0 0 1 1.295 12A10.705 10.705 0 0 1 12 1.295" />
                            </svg> update</button></td>
                    <td><button class="table-btn delete-btn" style="background-color: #D89788; color: white;"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                height="20" viewBox="0 0 24 24">
                                <path fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="m19.5 5.5l-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 0 1-1.2 1.128c-.957.584-2.24.584-4.806.584c-2.57 0-3.855 0-4.814-.585a4 4 0 0 1-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L4.5 5.5M3 5.5h18m-4.944 0l-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.035 2c-1.066 0-1.599 0-2.04.234a2 2 0 0 0-.278.18c-.395.303-.616.788-1.058 1.757L8.053 5.5m1.447 11v-6m5 6v-6"
                                    color="currentColor" />
                            </svg> delete</button></td>
`;
    tbody.appendChild(record);
    record.querySelector(".visit-btn").onclick = () => {
        let validUrl;
        if (siteURL.startsWith("http")) {
            validUrl = siteURL;
        } else {
            validUrl = "https://" + siteURL;
        }
        window.open(validUrl);
    };

    record.querySelector(".delete-btn").onclick = () => {
        tbody.removeChild(record)

    };
    record.querySelector(".update-btn").onclick = () => {
        recordToUpdate = record;

        // nameInput.value = siteName;
        // urlInput.value = siteURL;
    };
    nameInput.value = '';
    urlInput.value = '';

});



document.getElementById("Ok").onclick = () => {
    alert.style.display = "none";
    // nameInput.value = '';
    // urlInput.value = '';
};