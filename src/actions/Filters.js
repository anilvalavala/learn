
export const setTextFilter = (filterByText = '') => ({
    type: 'SET_TEXT_FILTER',
    filterByText
});

export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

export const sortByAmount = () => ({
    type: 'SORT_BY_PRICE',
});

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

