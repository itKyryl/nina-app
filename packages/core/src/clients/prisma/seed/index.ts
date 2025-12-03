import prisma from "..";


const main = async () => {
    await defaultSettings();
    await defaultTaskLoops();
    
}

const defaultSettings = async () => {
    const settings = await prisma.settings.findMany();

    if(settings.length === 0) {
        await prisma.settings.create({
            data: {
                isActive: true,
                maxWorkerThreads: 2,
                minWorkerThreads: 1,
                name: 'Default'
            }
        });

        console.log(`Created default settings`);
    } else {
        console.log('Settings config already exists');
    }
}

const defaultTaskLoops = async () => {
    const taskLoops = await prisma.taskLoop.findMany();

    if(taskLoops.length === 0) {
        const createdTasksLoops = await prisma.taskLoop.createMany({
            data: [
                {
                    type: 'COLLECT_TRAFFIC_SOURCE_DATA',
                    intervalMin: 60,
                    isActive: true
                }
            ],
        })

        console.log(`Created ${createdTasksLoops.count} loops`);
    } else {
        console.log(`Task loops already exists`);
    }
}

main();