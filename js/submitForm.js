const button = $('.submit-button')[0];
const form = $('.signup-form')[0];
const section = $('.submit-form-section')[0];

const modalButton = $('.modal-submit-btn')[0];
const modalForm = $('.modal-form')[0];
const modalDiv = $('.modal-window-try-now')[0];

const getData = (isModal) => {
    let formData;

    if (isModal) {
        formData = new FormData(modalForm);
        const inputs = $('.modal-input');
        formData.append('name', inputs[0].value);
        formData.append('email', inputs[1].value);
    } else {
        formData = new FormData(form);
        const inputs = $('.submit-form-input');
        formData.append('name', inputs[0].value);
        formData.append('email', inputs[1].value);
        formData.append('password', inputs[2].value);
    }

    return formData;
};

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    button.disabled = true;
    const requestResult = await sendFormData(false);
    const count = section.$('.submit-main-title');
    if (count.length < 2) {
        const newNode = document.createElement('p');
        if (requestResult < 400) {
            form.style.display = 'none';
            newNode.className = 'submit-main-title';
            newNode.textContent = 'Done! Thank you for sign up!';
            section.insertBefore(newNode, form);
        } else {
            button.disabled = false;
            newNode.className = 'error-main-title';
            newNode.textContent = 'Error! Please try again!';
            section.insertBefore(newNode, form);
        }
    }
});

modalForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    modalButton.disabled = true;
    const requestResult = await sendFormData(true);
    const newNode = document.createElement('p');
    if (requestResult < 400) {
        modalForm.style.display = 'none';
        newNode.className = 'submit-modal-title';
        newNode.textContent = 'Done! Thank you for sign up!';
        modalDiv.insertBefore(newNode, modalForm);
    } else {
        modalButton.disabled = false;
        newNode.className = 'error-main-title';
        newNode.textContent = 'Error! Please try again!';
        modalDiv.insertBefore(newNode, modalForm);
    }
});

async function sendFormData(isModal) {
    const formData = getData(isModal);
    const url = 'https://tihov.com.ua/internship/mail/';
    try {
        return fetch(url,
            {
                method: 'POST',
                body: formData
            })
            .then((res) => {
                isSend = true;
                return [res.ok, res.status];
            })
            .then((data) => {
                if (data[0]) {
                    return data[1];
                }
            });
    } catch (error) {
        const newNode = document.createElement('p');
        newNode.textContent = error.message;
        section.insertBefore(newNode, form);
    }
}
