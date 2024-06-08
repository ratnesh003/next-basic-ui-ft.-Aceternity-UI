"use client";

import React from 'react';

import Image from "next/image";
import Link from 'next/link';

import coursesData from "../data/music_courses.json";
import { CardBody, CardContainer, CardItem } from './ui/3d-card';

interface Courses {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string,
}

const CoursesList = () => {
  return (
    <div className='min-h-screen w-full bg-black/[0.96] flex flex-col items-center justify-start'>
        <h1 className='text-xl md:text-3xl lg:text-5xl text-white/90 font-bold mt-32 tracking-wider mb-6'>
            All Courses Provided by us
        </h1>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-10'>
            {coursesData.courses.map((card: Courses) => (
                <CardContainer className='inter-var w-80' key={card.id}>
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
                        <CardItem
                            translateZ="50"
                            className="w-full text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            {card.title} {
                                card.isFeatured && (
                                    <div 
                                    className='absolute left-[-34px] top-[-34px] h-8 w-8 z-10 rounded-full text-sm text-center content-center bg-red-500'>
                                        ft.
                                    </div>
                                )
                            }
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            {card.description}
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={card.image}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-lg font-bold tracking-tighter max-w-sm mt-5 dark:text-neutral-300"
                        >
                            ${card.price} /- 
                        </CardItem>
                        <div className="flex justify-between items-center mt-5">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href={`/courses/${card.slug}`}
                                className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white"
                            >
                                Try now →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Enroll now →
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            ))}
        </div>
    </div>
  )
}

export default CoursesList