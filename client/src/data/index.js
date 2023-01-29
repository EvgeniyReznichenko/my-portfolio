import { faker } from '@faker-js/faker'

const data = {
    portfolio: {
        personalInfo: {
            firstName: 'Evgeniy',
            lastName: 'Reznichenko',
            birth: {
                day: 27,
                month: 'May',
                year: 1988,
            },
            email: 'reznichenkoea@gmail.com',
            sex: 'Male',
        },
    },
}

export const getUser = function () {
    const personalInfo = data.portfolio.personalInfo

    return {
        avatar: faker.image.avatar(),
        birthday: `${personalInfo.birth.day} ${personalInfo.birth.month} ${personalInfo.birth.year}`,
        email: personalInfo.email,
        firstName: personalInfo.firstName,
        lastName: personalInfo.lastName,
        gender: personalInfo.sex,
    }
}.bind(data)
