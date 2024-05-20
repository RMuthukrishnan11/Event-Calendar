import { useEffect, useState } from "react";
import dayjs from "dayjs";
import locale from "dayjs/locale/en";
import weekdayPlugin from "dayjs/plugin/weekday";
import objectPlugin from "dayjs/plugin/toObject";
import isTodayPlugin from "dayjs/plugin/isToday";

const Calendar = () => {

    const now = dayjs().locale({
        ...locale,
    });

    dayjs.extend(weekdayPlugin);
    dayjs.extend(objectPlugin);
    dayjs.extend(isTodayPlugin);

    const [currentMonth, setCurrentMonth] = useState(now);
    const [arrayOfDays, setArrayOfDays] = useState([]);
    const nextMonth = () => {
        const plus = currentMonth.add(1, "month");

        setCurrentMonth(plus);
    };

    const prevMonth = () => {
        const minus = currentMonth.subtract(1, "month");

        setCurrentMonth(minus);
    };

    const eventsData = [
        {
            id: 0,
            title: "Labour Day",
            date: "1-5-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 1,
            title: "Laughter Day ",
            date: "3-5-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 2,
            title: "Coal Miner's Day ",
            date: "4-5-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },

        {
            id: 3,
            title: "World Athletics Day",
            date: "7-5-2024",
            time: "1.30am - 2.30am",
            duration: "1 Hours"
        },
        {
            id: 4,
            title: "Rabindranath Tagore's Birth Anniversary",
            date: "7-5-2024",
            time: "6.30am - 7.30am",
            duration: "1 Hours"
        },
        {
            id: 5,
            title: "World Red Cross Day",
            date: "8-5-2024",
            time: "6.30am - 7.30am",
            duration: "1 Hours"
        },
        {
            id: 6,
            title: "National Technology Day",
            date: "11-5-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 7,
            title: "International Nurses Day",
            date: "12-5-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 8,
            title: "International Day of Families",
            date: "15-5-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 9,
            title: "World Hypertension Day",
            date: "17-5-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },

        {
            id: 10,
            title: "World Telecommunication Day",
            date: "17-5-2024",
            time: "10.30am - 11.30am",
            duration: "1 Hours"
        },
        {
            id: 11,
            title: "International Day Of Museum",
            date: "18-5-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 12,
            title: "World AIDS Vaccine day",
            date: "18-5-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 13,
            title: "National Anti-Terrorism Day",
            date: "21-5-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 14,
            title: "International Day for Biological Diversity",
            date: "22-5-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 15,
            title: "International Day of Actions Women’s Health",
            date: "28-5-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 16,
            title: "Anti-Tobacco Day",
            date: "31-5-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 17,
            title: "Telangana Foundation Day",
            date: "2-6-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 18,
            title: "International Sex Worker Day",
            date: "2-6-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 19,
            title: "Telangana Foundation Day",
            date: "2-6-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 20,
            title: "International Yoga Day",
            date: "21-6-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 21,
            title: "Father’s Day",
            date: "3-6-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 22,
            title: "April Fool's Day",
            date: "1-4-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 23,
            title: "International Mine Awareness Day",
            date: "4-4-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 24,
            title: "World Health Day",
            date: "7-4-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 25,
            title: "Jallianwala Bagh Massacre Day",
            date: "13-4-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 26,
            title: "B.R. Ambedkar Remembrance Day",
            date: "14-4-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 27,
            title: "World Haemophilia Day",
            date: "17-4-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 28,
            title: "World Earth Day",
            date: "22-4-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 29,
            title: "National Panchayati Raj Day",
            date: "24-4-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 30,
            title: "World Homeopathy Day",
            date: "10-4-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },

        {
            id: 31,
            title: "Zero Discrimination Day",
            date: "1-3-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 32,
            title: "World Civil Defence Day",
            date: "1-3-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 33,
            title: "Self Injury Awareness Day (SIAD)",
            date: "1-3-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 34,
            title: "World Civil Defence Day",
            date: "1-3-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 35,
            title: "International Women’s Day",
            date: "8-3-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 36,
            title: "Ramakrishna Jayanti",
            date: "8-3-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 37,
            title: "World Water Day",
            date: "22-3-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 38,
            title: "International Day of Happiness",
            date: "20-3-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 39,
            title: "World Forestry Day",
            date: "21-3-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 40,
            title: "World Milk Day",
            date: "1-6-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 41,
            title: "Global Day of Parents",
            date: "1-6-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 42,
            title: "World Bicycle Day",
            date: "3-6-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 43,
            title: "World Ocean Day",
            date: "8-6-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 44,
            title: "Doctor's Day",
            date: "1-7-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 45,
            title: "International Plastic Bag Free Day",
            date: "3-7-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 46,
            title: "World Population Day",
            date: "11-7-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 47,
            title: "Maharashtra Din",
            date: "1-5-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
        {
            id: 48,
            title: "May Day",
            date: "1-5-2024",
            time: "9.30am - 10.30am",
            duration: "1 Hours"
        },
    ]

    const [viewEventModal, setViewEventModal] = useState(false)
    const [moreEventModal, setMoreEventModal] = useState([])
    const renderHeader = () => {
        const dateFormat = "MMMM YYYY";
        return (
            <div className="uppercase font-bold text-[115%] px-[0] py-[1em] border-2  border-b-grey-500 bg-sky-50 m-0 p-0 flex flex-row flex-wrap w-full flex-middle">
                <div className="flex-grow [flex-basis:0] max-w-full justify-start text-left">
                    <svg className="text-sky-400 hover:text-sky-400 w-6 h-4 text-gray-800 dark:text-black  ml-[1em] cursor-pointer [transition:.15s_ease-out] hover:scale-[1.25] hover:[transition:.25s_ease-out] font-['Material_Icons',_serif] not-italic inline-block align-middle leading-none normal-case tracking-[normal] [word-wrap:normal] whitespace-nowrap [direction:ltr] antialiased" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14" onClick={() => prevMonth()}>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
                    </svg><span className="text-xs text-bold cursor-pointer text-slate-400 hover:text-sky-400" onClick={() => prevMonth()}>Previous</span>
                </div>
                <div className="flex-grow [flex-basis:0] max-w-full justify-center text-center">
                    <span>{currentMonth.format(dateFormat)}</span>
                </div>
                <div className="flex-grow [flex-basis:0] max-w-full justify-end text-right" >
                    <span className="text-xs text-bold cursor-pointer text-slate-400 hover:text-sky-400"  onClick={() => nextMonth()}>Next</span>
                    <svg className="text-sky-400 hover:text-sky-400 w-6 h-4 text-gray-800 dark:text-black mr-[1em] cursor-pointer [transition:.15s_ease-out] hover:scale-[1.25] hover:[transition:.25s_ease-out] font-['Material_Icons',_serif] not-italic inline-block align-middle leading-none normal-case tracking-[normal] [word-wrap:normal] whitespace-nowrap [direction:ltr] antialiased" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14" onClick={() => nextMonth()}>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                    </svg>
                </div>
            </div>
        );
    };

    const renderDays = () => {
        const dateFormat = "dddd";
        const days = [];

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="flex-grow [flex-basis:0] max-w-full col-center" key={i}>
                    {now.weekday(i).format(dateFormat)}
                </div>
            );
        }
        return <div className="text-zinc-50 font-extrabold tracking-wider text-center uppercase font-normal text-[70%] px-[0] py-[.75em] border-1  border-grey-500 m-0 p-0 flex flex-row flex-wrap w-full">{days}</div>;
    };

    const getAllDays = () => {
        let currentDate = currentMonth.startOf("month").weekday(0);
        const nextMonth = currentMonth.add(1, "month").month();

        let allDates = [];
        let weekDates = [];

        let weekCounter = 1;

        while (currentDate.weekday(0).toObject().months !== nextMonth) {
            ;
            const formated = formateDateObject(currentDate);

            weekDates.push(formated);

            if (weekCounter === 7) {
                allDates.push({ dates: weekDates, events: eventsData });
                weekDates = [];
                weekCounter = 0;
            }

            weekCounter++;
            currentDate = currentDate.add(1, "day");
        }
        setArrayOfDays(allDates);
    };

    const hanldeViewEvent = (eventMoreData) => {
        setMoreEventModal(eventMoreData)
        setViewEventModal(true)

    }

    useEffect(() => {
        getAllDays();
    }, [currentMonth]);

    const renderCells = () => {
        const rows = [];
        let days = [];
        arrayOfDays.forEach((week, index) => {

            week.dates.forEach((d, i) => {

                let c_month = (d.month + 1);
                let dateCheck = d.day + "-" + c_month + "-" + d.year
                let filteredeventsData = [];
                for (let i = 0; i < eventsData.length; i++) {
                    if (eventsData[i].date === dateCheck) {
                        filteredeventsData = [...filteredeventsData, eventsData[i]];
                    }
                }

                days.push(
                    <div
                        className={`p-1 flex-grow [flex-basis:0] max-w-full relative h-[5em] border-2   overflow-hidden cursor-pointer bg-[#fff] [transition:0.25s_ease-out] hover:bg-neutral-300 hover:[transition:0.5s_ease-out] ${!d.isCurrentMonth ? "pointer-events-none bg-slate-100" : d.isCurrentDay ? " font-bold border-2  border-indigo-500 bg-neutral-300 hover:bg-neutral-300 [border-image:linear-gradient(45deg,_#1a8fff_0%,#53cbf1_40%)] [border-image-slice:1]" : ""
                            }`}
                        key={i}
                    >{filteredeventsData.length > 0 ? (<>
                        <span class="truncate hover:text-clip text-blue-700 text-wrap text-sm font-bold">
                            {filteredeventsData[0].title}</span><br />
                        <span className="text-xs font-bold"> {filteredeventsData[0].time} ({filteredeventsData[0].duration})</span><br />
                    </>) : <></>}
                        {filteredeventsData.length > 1 ? <p className="text-xs text-end underline text-right flex justify-start text-blue-950" onClick={() => hanldeViewEvent(filteredeventsData)}>view more ({filteredeventsData.length - 1}+)</p> : <></>}
                        <span className="absolute text-[70.5%] leading-none top-[.75em] right-[.75em] font-medium">{d.day}</span>
                        <span className="font-medium leading-none opacity-0 text-[8em] absolute -top-[.2em] -right-[.05em] [transition:.25s_ease-out] tracking-[-.07em]">{d.day}</span>
                    </div>
                );
            });

            rows.push(
                <div className="m-0 p-0 flex flex-row flex-wrap w-full" key={index}>
                    {days}
                </div>
            );
            days = [];
        });

        return <div className="border-r-[none] border-2  border-b-grey-500 font-['Open_Sans',_'Helvetica_Neue',_'Helvetica',_'Arial',_sans-serif] text-[1em] font-light leading-normal bg-cyan-500 relative">{rows}</div>;
    };

    const formateDateObject = date => {
        const clonedObject = { ...date.toObject() };

        const formatedObject = {
            day: clonedObject.date,
            month: clonedObject.months,
            year: clonedObject.years,
            isCurrentMonth: clonedObject.months === currentMonth.month(),
            isCurrentDay: date.isToday(),
            events: eventsData.map((event) => {
                if (event.day) {
                    return { title: event.title }
                }
            })
        };

        return formatedObject;
    };

    return (
        <div className="p-2 block relative w-full bg-gradient-to-r from-sky-500 to-indigo-500  border-[1px] border-[solid] border-2  font-bold text-lg">
            {renderHeader()}
            {renderDays()}
            {renderCells()}
            {viewEventModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                                    <h5 className="text-2xl font-semibold">
                                        Events ({moreEventModal[0].date})
                                    </h5>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setViewEventModal(false)}
                                    >
                                        <span className="bg-transparent font-bold text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="h-[240px] w-[100] overflow-y-auto grid grid-cols-1 divide-y">
                                    {moreEventModal.map((moreData, index) => {
                                        return (
                                            <div key={moreData.id} className="relative p-0 pl-16 pr-56 flex-auto odd:bg-gray-100">
                                                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                    <span class="truncate hover:text-clip text-blue-700 text-wrap text-base text-ellipsis overflow-hidden">
                                                        {moreData.title}</span><br />
                                                    <span className="text-sm"> {moreData.time}</span><br />
                                                    <span className="text-sm">  {moreData.duration}</span><br />
                                                </p>
                                            </div>
                                        )
                                    })}
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setViewEventModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>


                </>
            ) : null
            }

        </div >
    );
};

export default Calendar;