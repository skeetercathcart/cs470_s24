"use server"

import prisma_db from "@/prisma/prisma";


export const createNewTest = async (data: number, errors: number) => {

    const newTest = await prisma_db.testResult.create({
        data: {
            id: data,
            errors: errors
        }
    })

}

export const uploadDistance = async (testId: number, distance: number) => {

    const newDistance = await prisma_db.buttonDistance.create({
        data: {
            buttonDistance: distance,
            testId: testId
        }
    })

}

export const uploadSize = async (testId: number, size: number) => {

    const newDistance = await prisma_db.buttonSize.create({
        data: {
            buttonSize: size,
            testId: testId
        }
    })

}

export const uploadSide = async (testId: number, side: string) => {

    const newSide = await prisma_db.side.create({
        data: {
            buttonSide: side,
            testId: testId
        }
    })

}

export const uploadStartTime = async (testId: number, startTime: number) => {

    const newStartTime = await prisma_db.startTime.create({
        data: {
            time: startTime,
            testId: testId
        }
    })

}

export const uploadButtonTime = async (testId: number, buttonTime: number) => {

    const newButtonTime = await prisma_db.buttonTime.create({
        data: {
            buttonTime: buttonTime,
            testId: testId
        }
    })

}