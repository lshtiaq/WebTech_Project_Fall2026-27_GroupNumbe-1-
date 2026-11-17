// Default student information
let defaultProfile = {
    FullName: "Ishtiaq Ahmed",
    StudentID: "24-59556-3",
    Email: "24-59556-3@student.aiub.edu",
    Phone: "01766230046",
    Department: "CS",
    CGPA: "3.75",
    GraduationYear: "2027",
    Skills: "Html",
    LinkedIn: "",
    Bio: ""
};

function getProfileData()
{
    let savedData = localStorage.getItem("studentProfile");

    if(savedData === null)
    {
        return defaultProfile;
    }

    try
    {
        return JSON.parse(savedData);
    }
    catch(error)
    {
        return defaultProfile;
    }
}

// Load saved information in the edit form
function loadEditProfile()
{
    let profile = getProfileData();

    document.getElementById("FullName").value = profile.FullName;
    document.getElementById("StudentID").value = profile.StudentID;
    document.getElementById("Email").value = profile.Email;
    document.getElementById("Phone").value = profile.Phone;
    document.getElementById("Department").value = profile.Department;
    document.getElementById("CGPA").value = profile.CGPA;
    document.getElementById("GraduationYear").value = profile.GraduationYear;
    document.getElementById("Skills").value = profile.Skills;
    document.getElementById("LinkedIn").value = profile.LinkedIn;
    document.getElementById("Bio").value = profile.Bio;

    updateBioCounter();
}

// Validate all form information
function collect_data()
{
    let Name = validName();
    let Email = validateEmail();
    let Phone = validatePhone();
    let Department = validateDepartment();
    let CGPA = validateCGPA();
    let Year = validateYear();
    let Skills = validateSkills();
    let LinkedIn = validateLinkedIn();
    let Bio = validateBio();

    if(Name && Email && Phone && Department && CGPA && Year && Skills && LinkedIn && Bio)
    {
        saveProfile();
    }

    return false;
}

function validName()
{
    let Name = document.getElementById("FullName").value.trim();
    let Error = document.getElementById("NameError");
    let RegularExpression = /^[A-Za-z][A-Za-z .'-]*$/;

    if(Name === "")
    {
        Error.textContent = "* Please enter your full name.";
        return false;
    }
    else if(Name.length < 6 || !RegularExpression.test(Name))
    {
        Error.textContent = "Name must contain at least 6 letters and valid characters.";
        return false;
    }
    else
    {
        Error.textContent = "";
        return true;
    }
}

function validateEmail()
{
    let Email = document.getElementById("Email").value.trim();
    let Error = document.getElementById("EmailError");
    let RegularExpression = /^[^\s@]+@student\.aiub\.edu$/i;

    if(Email === "")
    {
        Error.textContent = "* Please enter your email.";
        return false;
    }
    else if(!RegularExpression.test(Email))
    {
        Error.textContent = "Enter a valid AIUB student email address.";
        return false;
    }
    else
    {
        Error.textContent = "";
        return true;
    }
}

function validatePhone()
{
    let Phone = document.getElementById("Phone").value.trim();
    let Error = document.getElementById("PhoneError");
    let RegularExpression = /^01[3-9][0-9]{8}$/;

    if(Phone === "")
    {
        Error.textContent = "* Please enter your phone number.";
        return false;
    }
    else if(!RegularExpression.test(Phone))
    {
        Error.textContent = "Enter a valid 11-digit Bangladeshi mobile number.";
        return false;
    }
    else
    {
        Error.textContent = "";
        return true;
    }
}

function validateDepartment()
{
    let Department = document.getElementById("Department").value;
    let Error = document.getElementById("DepartmentError");

    if(Department === "")
    {
        Error.textContent = "Please select your department.";
        return false;
    }
    else
    {
        Error.textContent = "";
        return true;
    }
}

function validateCGPA()
{
    let CGPA = document.getElementById("CGPA").value.trim();
    let Error = document.getElementById("CGPAError");
    let RegularExpression = /^[0-4](\.\d{1,2})?$/;

    if(CGPA === "")
    {
        Error.textContent = "* Please enter your CGPA.";
        return false;
    }
    else if(!RegularExpression.test(CGPA) || Number(CGPA) < 0 || Number(CGPA) > 4)
    {
        Error.textContent = "CGPA must be between 0.00 and 4.00 (maximum 2 decimal places).";
        return false;
    }
    else
    {
        Error.textContent = "";
        return true;
    }
}

function validateYear()
{
    let Year = document.getElementById("GraduationYear").value.trim();
    let Error = document.getElementById("YearError");
    let CurrentYear = new Date().getFullYear();

    if(Year === "")
    {
        Error.textContent = "* Please enter your graduation year.";
        return false;
    }
    else if(!/^[0-9]{4}$/.test(Year) || Number(Year) < CurrentYear || Number(Year) > CurrentYear + 10)
    {
        Error.textContent = "Enter a valid graduation year between " + CurrentYear + " and " + (CurrentYear + 10) + ".";
        return false;
    }
    else
    {
        Error.textContent = "";
        return true;
    }
}

function validateSkills()
{
    let Skills = document.getElementById("Skills").value.trim();
    let Error = document.getElementById("SkillsError");

    if(Skills === "")
    {
        Error.textContent = "* Please enter at least one skill.";
        return false;
    }
    else
    {
        Error.textContent = "";
        return true;
    }
}

function validateLinkedIn()
{
    let LinkedIn = document.getElementById("LinkedIn").value.trim();
    let Error = document.getElementById("LinkedInError");
    let RegularExpression = /^https:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9_% -]+\/?$/i;

    if(LinkedIn === "")
    {
        Error.textContent = "";
        return true;
    }
    else if(!RegularExpression.test(LinkedIn))
    {
        Error.textContent = "Enter a valid LinkedIn profile URL.";
        return false;
    }
    else
    {
        Error.textContent = "";
        return true;
    }
}

function validateBio()
{
    let Bio = document.getElementById("Bio").value;
    let Error = document.getElementById("BioError");

    if(Bio.length > 200)
    {
        Error.textContent = "Bio cannot contain more than 200 characters.";
        return false;
    }
    else
    {
        Error.textContent = "";
        return true;
    }
}

// Save updated information in localStorage
function saveProfile()
{
    let profile = {
        FullName: document.getElementById("FullName").value.trim(),
        StudentID: document.getElementById("StudentID").value,
        Email: document.getElementById("Email").value.trim(),
        Phone: document.getElementById("Phone").value.trim(),
        Department: document.getElementById("Department").value,
        CGPA: document.getElementById("CGPA").value,
        GraduationYear: document.getElementById("GraduationYear").value,
        Skills: document.getElementById("Skills").value.trim(),
        LinkedIn: document.getElementById("LinkedIn").value.trim(),
        Bio: document.getElementById("Bio").value.trim()
    };

    localStorage.setItem("studentProfile", JSON.stringify(profile));
    window.location.href = "profile.html";
}

// Show saved information in My Profile
function showProfile()
{
    let profile = getProfileData();
    let Initials = "";

    let NameParts = profile.FullName.trim().split(" ");

    for(let i = 0; i < NameParts.length; i++)
    {
        if(NameParts[i] !== "")
        {
            Initials += NameParts[i].charAt(0).toUpperCase();
        }
    }

    document.getElementById("profileInitials").textContent = Initials;
    document.getElementById("profileName").textContent = profile.FullName;
    document.getElementById("profileStudentID").textContent = profile.StudentID;
    document.getElementById("profileEmail").textContent = profile.Email;
    document.getElementById("profilePhone").textContent = profile.Phone;
    document.getElementById("profileDepartment").textContent = profile.Department;
    document.getElementById("profileCGPA").textContent = profile.CGPA;
    document.getElementById("profileGraduationYear").textContent = profile.GraduationYear;
    document.getElementById("profileSkills").textContent = profile.Skills;
    document.getElementById("profileLinkedIn").textContent = profile.LinkedIn || "Not added yet";
    document.getElementById("profileBio").textContent = profile.Bio || "Not added yet";
}

// Update the header and dashboard name
function showUserName()
{
    let profile = getProfileData();
    let Header = document.getElementById("userNameHeader");
    let Dashboard = document.getElementById("dashboardName");

    if(Header !== null)
    {
        Header.textContent = "Welcome, " + profile.FullName.toUpperCase();
    }

    if(Dashboard !== null)
    {
        Dashboard.textContent = "Hello, " + profile.FullName + "!";
    }
}

// Update Bio character count
function updateBioCounter()
{
    let Bio = document.getElementById("Bio");
    let Counter = document.getElementById("BioCounter");

    if(Bio !== null && Counter !== null)
    {
        Counter.textContent = Bio.value.length + "/200";
    }
}

// Cancel editing and return to My Profile
function cancelEdit()
{
    window.location.href = "profile.html";
}

document.addEventListener("DOMContentLoaded", function()
{
    showUserName();

    if(document.getElementById("FullName") !== null)
    {
        loadEditProfile();

        document.getElementById("Bio").addEventListener("input", updateBioCounter);
    }

    if(document.getElementById("profileName") !== null)
    {
        showProfile();
    }
});