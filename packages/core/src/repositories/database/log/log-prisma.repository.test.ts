import LogPrismaRepository from "./log-prisma.repository";
import prisma from '../../../../../db/src';

describe(LogPrismaRepository.name, () => {
  const logRepository = new LogPrismaRepository(prisma);

  it('create log', async () => {
    const logId = await logRepository.createLog({
      isError: true,
      message: 'Test log message',
      name: 'TestError',
      stack: 'Error stack trace',
      request: '{"url":"/test","method":"GET"}',
      response: '{"status":500,"data":"Internal Server Error"}',
      data: '{"additional":"info"}'
    });
    
    expect(typeof logId).toBe('number');
  })

  it('delete log', async () => {
    const logId = await logRepository.createLog({
      isError: true,
      message: 'Test log message',
      name: 'TestError',
      stack: 'Error stack trace',
      request: '{"url":"/test","method":"GET"}',
      response: '{"status":500,"data":"Internal Server Error"}',
      data: '{"additional":"info"}'
    });
    
    expect(typeof logId).toBe('number');
  })
});