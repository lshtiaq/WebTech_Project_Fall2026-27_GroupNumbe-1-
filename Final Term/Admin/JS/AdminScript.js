console.log("Admin JS Connected");

let users = [
    { id: 1,  name: "Rahim Uddin",       email: "rahim.uddin@student.aiub.edu",  role: "Student",   joined: "2026-01-12", status: "Active" },
    { id: 2,  name: "Nadia Islam",       email: "nadia.islam@student.aiub.edu",  role: "Student",   joined: "2026-01-15", status: "Active" },
    { id: 3,  name: "Tanvir Hasan",      email: "tanvir.hasan@student.aiub.edu", role: "Student",   joined: "2026-02-03", status: "Active" },
    { id: 4,  name: "Sumaiya Akter",     email: "sumaiya.akter@student.aiub.edu",role: "Student",   joined: "2026-02-20", status: "Blocked" },
    { id: 5,  name: "Farhan Ahmed",      email: "farhan.ahmed@student.aiub.edu", role: "Student",   joined: "2026-03-09", status: "Active" },
    { id: 6,  name: "Mahmudul Hasan",    email: "mahmudul.hasan@gmail.com",      role: "Alumni",    joined: "2026-01-20", status: "Active" },
    { id: 7,  name: "Shabnam Chowdhury", email: "shabnam.c@gmail.com",           role: "Alumni",    joined: "2026-02-11", status: "Active" },
    { id: 8,  name: "Imran Khan",        email: "imran.khan@gmail.com",          role: "Alumni",    joined: "2026-03-01", status: "Active" },
    { id: 9,  name: "Tasnim Rahman",     email: "tasnim.rahman@gmail.com",       role: "Alumni",    joined: "2026-04-14", status: "Active" },
    { id: 10, name: "Sajid Karim",       email: "sajid@technova.com",            role: "Recruiter", joined: "2026-02-05", status: "Active" },
    { id: 11, name: "Nusrat Jahan",      email: "nusrat@brightpath.com",         role: "Recruiter", joined: "2026-02-18", status: "Active" },
    { id: 12, name: "Rafiq Mahmud",      email: "rafiq@greenleaf.com",           role: "Recruiter", joined: "2026-10-25", status: "Active" },
    { id: 13, name: "Anika Sultana",     email: "anika@bengaldata.com",          role: "Recruiter", joined: "2026-10-27", status: "Active" },
    { id: 14, name: "Kamal Hossain",     email: "kamal@pixelcraft.com",          role: "Recruiter", joined: "2026-10-29", status: "Active" }
];

let recruiters = [
    { id: 1, name: "Sajid Karim",    company: "TechNova Ltd",         email: "sajid@technova.com",    phone: "01711000001", appliedOn: "2026-02-05", status: "Verified" },
    { id: 2, name: "Nusrat Jahan",   company: "BrightPath Solutions", email: "nusrat@brightpath.com", phone: "01711000002", appliedOn: "2026-02-18", status: "Verified" },
    { id: 3, name: "Rafiq Mahmud",   company: "GreenLeaf Software",   email: "rafiq@greenleaf.com",   phone: "01711000003", appliedOn: "2026-10-25", status: "Pending" },
    { id: 4, name: "Anika Sultana",  company: "Bengal Data Systems",  email: "anika@bengaldata.com",  phone: "01711000004", appliedOn: "2026-10-27", status: "Pending" },
    { id: 5, name: "Kamal Hossain",  company: "PixelCraft Studio",    email: "kamal@pixelcraft.com",  phone: "01711000005", appliedOn: "2026-10-29", status: "Pending" },
    { id: 6, name: "Farzana Yasmin", company: "CloudNine BD",         email: "farzana@cloudnine.com", phone: "01711000006", appliedOn: "2026-09-10", status: "Rejected" }
];

let jobs = [
    { id: 1, title: "Junior Web Developer",   company: "TechNova Ltd",         recruiterId: 1, type: "Full-time",  location: "Dhaka",      salary: "25,000 - 35,000 BDT", postedOn: "2026-10-28", status: "Pending",  reason: "",
      description: "Build and maintain company websites using HTML, CSS and JavaScript. Fresh graduates can apply." },
    { id: 2, title: "UI/UX Design Intern",    company: "BrightPath Solutions", recruiterId: 2, type: "Internship", location: "Dhaka",      salary: "10,000 BDT",          postedOn: "2026-10-29", status: "Pending",  reason: "",
      description: "3 months internship. Design mobile app screens using Figma. Portfolio is a plus." },
    { id: 3, title: "Software Engineer (PHP)",company: "GreenLeaf Software",   recruiterId: 3, type: "Full-time",  location: "Chattogram", salary: "40,000 - 55,000 BDT", postedOn: "2026-10-29", status: "Pending",  reason: "",
      description: "Develop backend features with PHP and MySQL. 1+ year experience required." },
    { id: 4, title: "Data Entry Executive",   company: "Bengal Data Systems",  recruiterId: 4, type: "Part-time",  location: "Remote",     salary: "12,000 BDT",          postedOn: "2026-10-30", status: "Pending",  reason: "",
      description: "Enter and verify data in spreadsheets. Fast typing and basic Excel knowledge needed." },
    { id: 5, title: "Frontend Developer",     company: "TechNova Ltd",         recruiterId: 1, type: "Full-time",  location: "Dhaka",      salary: "45,000 - 60,000 BDT", postedOn: "2026-10-10", status: "Approved", reason: "",
      description: "Create responsive user interfaces. Knowledge of JavaScript is required." },
    { id: 6, title: "QA Engineer",            company: "BrightPath Solutions", recruiterId: 2, type: "Full-time",  location: "Dhaka",      salary: "30,000 - 40,000 BDT", postedOn: "2026-10-12", status: "Approved", reason: "",
      description: "Test web applications, write test cases and report bugs." },
    { id: 7, title: "Network Support Officer",company: "PixelCraft Studio",    recruiterId: 5, type: "Full-time",  location: "Dhaka",      salary: "Not given",           postedOn: "2026-10-15", status: "Rejected", reason: "Salary information is missing.",
      description: "Maintain office network and give IT support to staff." }
];

let companies = [
    { id: 1, name: "TechNova Ltd",         industry: "Software",  location: "Dhaka",      website: "https://www.technova.com" },
    { id: 2, name: "BrightPath Solutions", industry: "Software",  location: "Dhaka",      website: "https://www.brightpath.com" },
    { id: 3, name: "GreenLeaf Software",   industry: "Software",  location: "Chattogram", website: "https://www.greenleaf.com" },
    { id: 4, name: "Bengal Data Systems",  industry: "Data",      location: "Dhaka",      website: "https://www.bengaldata.com" },
    { id: 5, name: "PixelCraft Studio",    industry: "Design",    location: "Sylhet",     website: "https://www.pixelcraft.com" },
    { id: 6, name: "CloudNine BD",         industry: "Telecom",   location: "Dhaka",      website: "https://www.cloudnine.com" }
];

let activities = [
    "Anika Sultana applied for recruiter verification (30 Oct 2026)",
    "Bengal Data Systems posted a new job: Data Entry Executive (30 Oct 2026)",
    "Kamal Hossain applied for recruiter verification (29 Oct 2026)",
    "TechNova Ltd posted a new job: Junior Web Developer (28 Oct 2026)",
    "Sumaiya Akter was blocked by admin (20 Oct 2026)"
];

let adminProfile = {
    name: "System Admin",
    email: "admin@portal.aiub.edu",
    phone: "01700000000",
    role: "System Administrator",
    lastLogin: "31 Oct 2026, 09:00 AM"
};

function findIndexById(list, id)
{
    for(let i = 0; i < list.length; i++)
    {
        if(list[i].id == id)
        {
            return i;
        }
    }
    return -1;
}

function removeFromList(list, id)
{
    let result = [];
    for(let i = 0; i < list.length; i++)
    {
        if(list[i].id != id)
        {
            result.push(list[i]);
        }
    }
    return result;
}

function makeBadge(status)
{
    return '<span class="badge ' + status.toLowerCase() + '">' + status + '</span>';
}

function loadDashboard()
{
    let students = 0;
    let alumni = 0;
    let recruiterUsers = 0;

    for(let i = 0; i < users.length; i++)
    {
        if(users[i].role == "Student")
        {
            students++;
        }
        else if(users[i].role == "Alumni")
        {
            alumni++;
        }
        else if(users[i].role == "Recruiter")
        {
            recruiterUsers++;
        }
    }

    let pendingRecruiters = 0;
    for(let i = 0; i < recruiters.length; i++)
    {
        if(recruiters[i].status == "Pending")
        {
            pendingRecruiters++;
        }
    }

    let pendingJobs = 0;
    for(let i = 0; i < jobs.length; i++)
    {
        if(jobs[i].status == "Pending")
        {
            pendingJobs++;
        }
    }

    document.getElementById("TotalStudents").innerHTML = students;
    document.getElementById("TotalAlumni").innerHTML = alumni;
    document.getElementById("TotalRecruiters").innerHTML = recruiterUsers;
    document.getElementById("TotalCompanies").innerHTML = companies.length;
    document.getElementById("PendingRecruiters").innerHTML = pendingRecruiters;
    document.getElementById("PendingJobs").innerHTML = pendingJobs;

    let notice = document.getElementById("NoticeBox");
    if(pendingRecruiters > 0 || pendingJobs > 0)
    {
        notice.innerHTML = "<b>Action needed:</b> <a href='AdminRecruiters.html'>" + pendingRecruiters +
                           " recruiter(s)</a> are waiting for verification and <a href='AdminJobs.html'>" +
                           pendingJobs + " job(s)</a> are waiting for approval.";
    }
    else
    {
        notice.innerHTML = "Everything is up to date. No pending work.";
    }

    let text = "";
    for(let i = 0; i < activities.length; i++)
    {
        text += "<li>" + activities[i] + "</li>";
    }
    document.getElementById("ActivityList").innerHTML = text;
}

function loadUsers()
{
    filterUsers();
}

function filterUsers()
{
    let role = document.getElementById("RoleFilter").value;
    let search = document.getElementById("SearchUser").value.toLowerCase();
    let result = [];

    for(let i = 0; i < users.length; i++)
    {
        let roleMatch = (role == "All" || users[i].role == role);
        let textMatch = (users[i].name.toLowerCase().indexOf(search) != -1 ||
                         users[i].email.toLowerCase().indexOf(search) != -1);

        if(roleMatch && textMatch)
        {
            result.push(users[i]);
        }
    }
    showUsers(result);
}

function showUsers(list)
{
    let text = "<tr>";
    text += "<th> ID </th>";
    text += "<th> Name </th>";
    text += "<th> Email </th>";
    text += "<th> Role </th>";
    text += "<th> Joined </th>";
    text += "<th> Status </th>";
    text += "<th> Action </th>";
    text += "</tr>";
    for(let i = 0; i < list.length; i++)
    {
        let u = list[i];
        let blockText = "Block";
        let blockClass = "btn-warn";
        if(u.status == "Blocked")
        {
            blockText = "Unblock";
            blockClass = "btn-good";
        }

        text += "<tr>";
        text += "<td>" + u.id + "</td>";
        text += "<td>" + u.name + "</td>";
        text += "<td>" + u.email + "</td>";
        text += "<td>" + u.role + "</td>";
        text += "<td>" + u.joined + "</td>";
        text += "<td>" + makeBadge(u.status) + "</td>";
        text += "<td>";
        text += "<button class='" + blockClass + "' onclick='toggleBlock(" + u.id + ")'>" + blockText + "</button>";
        text += "<button class='btn-bad' onclick='deleteUser(" + u.id + ")'>Delete</button>";
        text += "</td>";
        text += "</tr>";
    }

    if(list.length == 0)
    {
        text += "<tr><td>No user found.</td></tr>";
    }

    document.getElementById("UserTable").innerHTML = text;
    document.getElementById("UserCount").innerHTML = "Showing " + list.length + " of " + users.length + " users";
}

function toggleBlock(id)
{
    let index = findIndexById(users, id);
    if(users[index].status == "Active")
    {
        users[index].status = "Blocked";
    }
    else
    {
        users[index].status = "Active";
    }
    filterUsers();
}

function deleteUser(id)
{
    users = removeFromList(users, id);
    filterUsers();
}

function loadRecruiters()
{
    filterRecruiters();
}

function filterRecruiters()
{
    let status = document.getElementById("RecruiterFilter").value;
    let result = [];

    for(let i = 0; i < recruiters.length; i++)
    {
        if(status == "All" || recruiters[i].status == status)
        {
            result.push(recruiters[i]);
        }
    }
    showRecruiters(result);
    updateRecruiterCounts();
}

function showRecruiters(list)
{
    let text = "<tr>";
    text += "<th> ID </th>";
    text += "<th> Name </th>";
    text += "<th> Company </th>";
    text += "<th> Contact </th>";
    text += "<th> Applied On </th>";
    text += "<th> Status </th>";
    text += "<th> Action </th>";
    text += "</tr>";
    for(let i = 0; i < list.length; i++)
    {
        let r = list[i];
        text += "<tr>";
        text += "<td>" + r.id + "</td>";
        text += "<td>" + r.name + "</td>";
        text += "<td>" + r.company + "</td>";
        text += "<td>" + r.email + "<br>" + r.phone + "</td>";
        text += "<td>" + r.appliedOn + "</td>";
        text += "<td>" + makeBadge(r.status) + "</td>";
        text += "<td>";
        if(r.status == "Pending")
        {
            text += "<button class='btn-good' onclick='verifyRecruiter(" + r.id + ")'>Verify</button>";
            text += "<button class='btn-bad' onclick='rejectRecruiter(" + r.id + ")'>Reject</button>";
        }
        else
        {
            text += "<button class='btn-warn' onclick='undoRecruiter(" + r.id + ")'>Undo</button>";
        }
        text += "</td>";
        text += "</tr>";
    }

    if(list.length == 0)
    {
        text += "<tr><td>No recruiter found.</td></tr>";
    }
    document.getElementById("RecruiterTable").innerHTML = text;
}

function updateRecruiterCounts()
{
    let pending = 0;
    let verified = 0;
    let rejected = 0;

    for(let i = 0; i < recruiters.length; i++)
    {
        if(recruiters[i].status == "Pending")
        {
            pending++;
        }
        else if(recruiters[i].status == "Verified")
        {
            verified++;
        }
        else
        {
            rejected++;
        }
    }
    document.getElementById("RecruiterCount").innerHTML =
        "Pending: " + pending + " &nbsp;|&nbsp; Verified: " + verified + " &nbsp;|&nbsp; Rejected: " + rejected;
}

function verifyRecruiter(id)
{
    let index = findIndexById(recruiters, id);
    recruiters[index].status = "Verified";
    filterRecruiters();
}

function rejectRecruiter(id)
{
    let index = findIndexById(recruiters, id);
    recruiters[index].status = "Rejected";
    filterRecruiters();
}

function undoRecruiter(id)
{
    let index = findIndexById(recruiters, id);
    recruiters[index].status = "Pending";
    filterRecruiters();
}

function loadJobs()
{
    filterJobs();
}

function filterJobs()
{
    let status = document.getElementById("JobFilter").value;
    let result = [];

    for(let i = 0; i < jobs.length; i++)
    {
        if(status == "All" || jobs[i].status == status)
        {
            result.push(jobs[i]);
        }
    }
    showJobs(result);
}

function showJobs(list)
{
    let text = "<tr>";
    text += "<th> ID </th>";
    text += "<th> Job Title </th>";
    text += "<th> Company </th>";
    text += "<th> Type </th>";
    text += "<th> Posted On </th>";
    text += "<th> Recruiter </th>";
    text += "<th> Job Status </th>";
    text += "<th> Action </th>";
    text += "</tr>";
    for(let i = 0; i < list.length; i++)
    {
        let j = list[i];

        let rIndex = findIndexById(recruiters, j.recruiterId);
        let recruiterStatus = recruiters[rIndex].status;

        text += "<tr>";
        text += "<td>" + j.id + "</td>";
        text += "<td>" + j.title + "</td>";
        text += "<td>" + j.company + "</td>";
        text += "<td>" + j.type + "</td>";
        text += "<td>" + j.postedOn + "</td>";
        text += "<td>" + makeBadge(recruiterStatus) + "</td>";
        text += "<td>" + makeBadge(j.status) + "</td>";
        text += "<td>";
        text += "<button class='btn-view' onclick='viewJob(" + j.id + ")'>View</button>";
        if(j.status == "Pending")
        {
            text += "<button class='btn-good' onclick='approveJob(" + j.id + ")'>Approve</button>";
            text += "<button class='btn-bad' onclick='rejectJob(" + j.id + ")'>Reject</button>";
        }
        text += "</td>";
        text += "</tr>";
    }

    if(list.length == 0)
    {
        text += "<tr><td>No job found.</td></tr>";
    }
    document.getElementById("JobTable").innerHTML = text;
    document.getElementById("JobCount").innerHTML = "Showing " + list.length + " of " + jobs.length + " jobs";
}

function viewJob(id)
{
    let index = findIndexById(jobs, id);
    let j = jobs[index];

    let text = "<fieldset>";
    text += "<legend> Job Details </legend>";
    text += "<p><b>Title:</b> " + j.title + "</p>";
    text += "<p><b>Company:</b> " + j.company + "</p>";
    text += "<p><b>Type:</b> " + j.type + " &nbsp; <b>Location:</b> " + j.location + "</p>";
    text += "<p><b>Salary:</b> " + j.salary + "</p>";
    text += "<p><b>Posted on:</b> " + j.postedOn + "</p>";
    text += "<p><b>Description:</b> " + j.description + "</p>";
    if(j.status == "Rejected")
    {
        text += "<p class='error'>Rejected reason: " + j.reason + "</p>";
    }
    text += "<button class='btn-view' onclick='closeJob()'>Close</button>";
    text += "</fieldset>";

    document.getElementById("JobDetail").innerHTML = text;
}

function closeJob()
{
    document.getElementById("JobDetail").innerHTML = "";
}

function approveJob(id)
{
    let index = findIndexById(jobs, id);
    let rIndex = findIndexById(recruiters, jobs[index].recruiterId);
    let Message = document.getElementById("JobMessage");

    jobs[index].status = "Approved";
    closeJob();
    filterJobs();

    if(recruiters[rIndex].status != "Verified")
    {
        Message.innerHTML = "Warning: " + recruiters[rIndex].name + " is not verified yet. Please verify the recruiter.";
    }
    else
    {
        Message.innerHTML = "";
    }
}

function rejectJob(id)
{
    let index = findIndexById(jobs, id);
    let reason = document.getElementById("RejectReason").value.trim();
    let Message = document.getElementById("JobMessage");

    if(reason == "")
    {
        Message.innerHTML = "* Please write the reject reason first";
        return;
    }

    jobs[index].status = "Rejected";
    jobs[index].reason = reason;
    document.getElementById("RejectReason").value = "";
    Message.innerHTML = "";
    closeJob();
    filterJobs();
}

function loadCompanies()
{
    showCompanies();
}

function showCompanies()
{
    let text = "<tr>";
    text += "<th> ID </th>";
    text += "<th> Company Name </th>";
    text += "<th> Industry </th>";
    text += "<th> Location </th>";
    text += "<th> Website </th>";
    text += "<th> Jobs </th>";
    text += "<th> Action </th>";
    text += "</tr>";
    for(let i = 0; i < companies.length; i++)
    {
        let c = companies[i];

        let jobCount = 0;
        for(let k = 0; k < jobs.length; k++)
        {
            if(jobs[k].company == c.name)
            {
                jobCount++;
            }
        }

        text += "<tr>";
        text += "<td>" + c.id + "</td>";
        text += "<td>" + c.name + "</td>";
        text += "<td>" + c.industry + "</td>";
        text += "<td>" + c.location + "</td>";
        text += "<td>" + c.website + "</td>";
        text += "<td>" + jobCount + "</td>";
        text += "<td><button class='btn-bad' onclick='removeCompany(" + c.id + ")'>Remove</button></td>";
        text += "</tr>";
    }

    if(companies.length == 0)
    {
        text += "<tr><td>No company listed.</td></tr>";
    }
    document.getElementById("CompanyTable").innerHTML = text;
    document.getElementById("CompanyCount").innerHTML = "Total companies: " + companies.length;
}

function removeCompany(id)
{
    companies = removeFromList(companies, id);
    showCompanies();
}

function collect_company()
{
    let a = validCompanyName();
    let b = validIndustry();
    let c = validCompanyLocation();
    let d = validWebsite();

    if(a && b && c && d)
    {
        let newCompany = {
            id: companies.length + 1,
            name: document.getElementById("CompanyName").value.trim(),
            industry: document.getElementById("CompanyIndustry").value,
            location: document.getElementById("CompanyLocation").value.trim(),
            website: document.getElementById("CompanyWebsite").value.trim()
        };
        while(findIndexById(companies, newCompany.id) != -1)
        {
            newCompany.id++;
        }
        companies.push(newCompany);
        showCompanies();

        document.getElementById("CompanyName").value = "";
        document.getElementById("CompanyIndustry").value = "";
        document.getElementById("CompanyLocation").value = "";
        document.getElementById("CompanyWebsite").value = "";
        document.getElementById("CompanyMessage").innerHTML = "Company added successfully.";
    }
    else
    {
        document.getElementById("CompanyMessage").innerHTML = "";
    }
    return false;
}

function validCompanyName()
{
    let name = document.getElementById("CompanyName").value.trim();
    let Error = document.getElementById("CompanyNameError");
    if(name == "")
    {
        Error.innerHTML = "* Please enter the company name";
        return false;
    }
    else if(name.length < 3)
    {
        Error.innerHTML = "Company name must have at least 3 characters";
        return false;
    }
    Error.innerHTML = "";
    return true;
}

function validIndustry()
{
    let industry = document.getElementById("CompanyIndustry").value;
    let Error = document.getElementById("IndustryError");
    if(industry == "")
    {
        Error.innerHTML = "* Please select an industry";
        return false;
    }
    Error.innerHTML = "";
    return true;
}

function validCompanyLocation()
{
    let place = document.getElementById("CompanyLocation").value.trim();
    let Error = document.getElementById("CompanyLocationError");
    if(place == "")
    {
        Error.innerHTML = "* Please enter the location";
        return false;
    }
    Error.innerHTML = "";
    return true;
}

function validWebsite()
{
    let site = document.getElementById("CompanyWebsite").value.trim();
    let Error = document.getElementById("WebsiteError");
    if(site == "")
    {
        Error.innerHTML = "* Please enter the website";
        return false;
    }
    else if(site.indexOf("http://") != 0 && site.indexOf("https://") != 0)
    {
        Error.innerHTML = "Website must start with http:// or https://";
        return false;
    }
    Error.innerHTML = "";
    return true;
}

function loadProfile()
{
    showProfile();
    document.getElementById("AdminName").value = adminProfile.name;
    document.getElementById("AdminEmail").value = adminProfile.email;
    document.getElementById("AdminPhone").value = adminProfile.phone;
}

function showProfile()
{
    document.getElementById("ShowName").innerHTML = adminProfile.name;
    document.getElementById("ShowEmail").innerHTML = adminProfile.email;
    document.getElementById("ShowPhone").innerHTML = adminProfile.phone;
    document.getElementById("ShowRole").innerHTML = adminProfile.role;
    document.getElementById("ShowLogin").innerHTML = adminProfile.lastLogin;
}

function collect_admin_data()
{
    let a = validAdminName();
    let b = validAdminEmail();
    let c = validAdminPhone();
    let d = validNewPassword();
    let e = validConfirmPassword();

    if(a && b && c && d && e)
    {
        adminProfile.name = document.getElementById("AdminName").value.trim();
        adminProfile.email = document.getElementById("AdminEmail").value.trim();
        adminProfile.phone = document.getElementById("AdminPhone").value.trim();
        showProfile();
        document.getElementById("ProfileMessage").innerHTML = "Profile updated successfully.";
    }
    else
    {
        document.getElementById("ProfileMessage").innerHTML = "";
    }
    return false;
}

function validAdminName()
{
    let name = document.getElementById("AdminName").value.trim();
    let Error = document.getElementById("AdminNameError");
    if(name == "")
    {
        Error.innerHTML = "* Please enter your name";
        return false;
    }
    else if(name.length < 6)
    {
        Error.innerHTML = "Name must have at least 6 characters";
        return false;
    }
    Error.innerHTML = "";
    return true;
}

function validAdminEmail()
{
    let email = document.getElementById("AdminEmail").value.trim();
    let Error = document.getElementById("AdminEmailError");
    let RegularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email == "")
    {
        Error.innerHTML = "* Please enter the email";
        return false;
    }
    else if(!RegularExpression.test(email))
    {
        Error.innerHTML = "Please enter the email in the exact format";
        return false;
    }
    Error.innerHTML = "";
    return true;
}

function validAdminPhone()
{
    let phone = document.getElementById("AdminPhone").value.trim();
    let Error = document.getElementById("AdminPhoneError");
    let RegularExpression = /^01[0-9]{9}$/;
    if(phone == "")
    {
        Error.innerHTML = "* Please enter the phone number";
        return false;
    }
    else if(!RegularExpression.test(phone))
    {
        Error.innerHTML = "Phone must be 11 digits and start with 01";
        return false;
    }
    Error.innerHTML = "";
    return true;
}

function validNewPassword()
{
    let pass = document.getElementById("NewPassword").value;
    let Error = document.getElementById("NewPasswordError");
    if(pass != "" && pass.length < 8)
    {
        Error.innerHTML = "Password must have at least 8 characters";
        return false;
    }
    Error.innerHTML = "";
    return true;
}

function validConfirmPassword()
{
    let pass = document.getElementById("NewPassword").value;
    let confirmPass = document.getElementById("ConfirmPassword").value;
    let Error = document.getElementById("ConfirmPasswordError");
    if(pass != confirmPass)
    {
        Error.innerHTML = "Confirm password does not match";
        return false;
    }
    Error.innerHTML = "";
    return true;
}
