
// changes the visibilty of the settings menu upon clicking the button in the header
function toggleSettings() {
    const hiddenMenu = document.querySelector('.hiddenMenu');
    hiddenMenu.classList.toggle('active');
    menuButton.classList.toggle('active');
}


// changes the image of miso to the other version on click
function changeMisoImage() {
    const image = document.getElementById('misoPicture');
    const directory = 'src/images/pictures/';
    if (image.src.includes('miso.jpg')) {
        image.src = directory + 'miso2.jpg';
    }
    else {
        image.src = directory + 'miso.jpg';
    }
}


// all functions below are for GitHub REST API calling
// for automatic updating of the projects section


// fetches repositories using the GitHub REST API and returns
async function getRepositories() {
    const res = await fetch('https://api.github.com/users/loganlucas13/repos')
    const data = await res.json();
    return data;
}


// parses raw repo data for name and description fields and returns altered data
function parseRepoData(rawData) {
    return rawData.map(item => {
        return {
            name: item.name,
            description: item.description,
            url: item.html_url
        }
    })
}


// retrieves languages for a given repository and returns
async function getLanguages(repoName) {
    const query = 'https://api.github.com/repos/loganlucas13/' + repoName + '/languages';
    const res = await fetch(query)
    const data = await res.json();
    return data;
}


// combines the data from both API calls into a single data structure
async function mergeRepoAndLanguages(data) {
    return await Promise.all(data.map(async item => {
        return {
            ...item,
            languages: await getLanguages(item.name)
        };
    }));
}


// retrieves all data needed for the projects section
// data includes: repo name, description, url, and languages
async function getAllData() {
    const rawRepoData = await getRepositories();
    const parsedRepoData = parseRepoData(rawRepoData);
    const finalData = mergeRepoAndLanguages(parsedRepoData);
    return finalData;
}


// fetches all data from the GitHub API and displays onto the website
// excludes specific repositories from being shown (for example, the GitHub profile configuration repo)
document.addEventListener('DOMContentLoaded', async function() {
    let dataEntries = await getAllData();

    const excludedRepositories = ['loganlucas13'];
    dataEntries = dataEntries.filter(project => !excludedRepositories.includes(project.name));

    const projectDivs = document.querySelectorAll('#projectBoxes .project');

    // iterates through each project div to display information
    dataEntries.forEach((project, index) => {
        if (index < projectDivs.length) {
            const currentProject = projectDivs[index];

            // only languages with more than 100 lines in the repository are shown
            const htmlContent = `
            <h2>${project.name}</h2>
            <p class="description">${project.description}</p>
            <div class="languageDisplay">
            <h3>Languages:</h3>
            <p>${Object.entries(project.languages).filter(([language, lines]) => lines > 100).map(([language, lines]) => `${language}`).join(', ')}</p>
            </div>
            <p><a href="${project.url}" target="_blank">GitHub Link</a></p>
            `;
            currentProject.innerHTML = htmlContent;
        }
    });
});