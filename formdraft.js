// © 2022
// Developed By: The Karan Pargaien
// v1

let formDraftConst = null;

function saveFormData(formId = "", uniqueIdentifier = "") {
  debugger;
  if (formId !== "") {
    const formData = new FormData(document.getElementById(formId));
    const serializedData = JSON.stringify(Array.from(formData.entries()));
    localStorage.setItem("draft_" + formId + uniqueIdentifier, serializedData);
    console.log("Formdata drafted successfully");
  }
}

function populateFormData(formId = "", uniqueIdentifier = "") {
  debugger;
  if (formId !== "") {
    const formData = localStorage.getItem("draft_" + formId + uniqueIdentifier);
    if (formData !== null && formData !== undefined) {
      const formObj = document.forms[formId];
      const parsedData = JSON.parse(formData);
      if (formObj !== undefined && parsedData !== undefined && parsedData.length > 0) {
        for (let i = 0; i < parsedData.length; i++) {
          try {
            formObj.elements[parsedData[i][0]].value = parsedData[i][1];
          } catch (err) {
            console.log("Error occurred in populateFormData method: " + err);
          }
        }
      }
    }
  }
}

function startDraftingForm(formId = "", uniqueIdentifier = "") {
  formDraftConst = setInterval(function () {
    saveFormData(formId, uniqueIdentifier);
  }, 2000);
}

function stopDraftingForm() {
  clearInterval(formDraftConst);
}