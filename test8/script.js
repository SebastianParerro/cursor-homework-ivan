'use strict';

const staffs = {
	salary: 100000,
	position: "CEO",
	subordinates: [{
		salary: 75000,
		position: "CTO",
		subordinates: [{
			position: "Engineer",
			salary: 50000
		}]
	}, {
		salary: 70000,
		position: "CMO",
		subordinates: [{
			position: "Secretary",
			salary: 20000
		}, {
			position: "Chief",
			salary: 30000,
			subordinates: [{
				position: "Worker",
				salary: 18000,
				subordinates: [{
					position: "Intern",
					salary: 5000
				}]
			}]
		}]
	}]
}

const getMinSallary = (staffs) => {
	if (!staffs?.subordinates?.length) {
		return staffs.salary;
	}

	const subordinatesSalaries = staffs.subordinates.map((staff) => getMinSallary(staff));
	return Math.min(staffs.salary, ...subordinatesSalaries);
}