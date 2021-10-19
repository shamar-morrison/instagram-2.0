export interface UsersInterface {
	name: string;
	username?: string;
	avatar: string;
	email?: string;
	dob?: string | Date;
	phone?: string;
	address?: Address;
	website?: string;
	company?: Company;
	id?: number | string;
}

export interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
}

export interface Geo {
	lat: string;
	lng: string;
}

export interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}
