const getData = async () => {
    try {
        const response = await fetch('https://ets-pemweb-23-pjqyzk5qxq-et.a.run.app/users');
        const data = await response.json();
        const finalData = data.users;

        showData(finalData);
    } catch (error) {
        console.log(error);
    }
};

const showData = (finalData) => {
    const userContainer = document.getElementById('user-cont');

    finalData.forEach((user) => {
        const userItem = document.createElement('div');
        userItem.classList.add('col', 'mb-4');

        userItem.innerHTML = `
            <div class="card">
                <div class="card-body">
                        <h3>${user.name}</h3>
                        <h4 class="text-secondary">${user.position}</h4>
                        <h5 class="text-body-tertiary fw-medium pt-1"> &mdash; ${user.company}</h5>
                        <div class="d-flex gap-4 mx-auto justify-content-center mt-4 mb-0">
                            <div class="text-center">
                                <p class="fw-semibold m-0">Following</p>
                                <p>${user.following_count}</p>
                            </div>
                            <div class="text-center">
                                <p class="fw-semibold m-0">Followers</p>
                                <p>${user.followers_count}</p>
                            </div>
                        </div>
                        <p><i class="bi bi-envelope-fill pe-2"></i>${user.contact.email}</p>
                        <p><i class="bi bi-telephone-fill pe-2"></i>${user.contact.phone}</p>
                        <p class="pe-md-5"><i class="bi bi-geo-alt-fill pe-2"></i>${user.contact.address}</p>
                    </div>
                </div>
            </div>
            `;
        userContainer.appendChild(userItem);
    });
};

getData();
