import '@prisma/react-native';
import { PrismaClient } from '@prisma/client/react-native';
import { reactiveHooksExtension } from '@prisma/react-native';

const baseClient = new PrismaClient({
    datasources: {
        db: {
            url: 'file:./dev.db',
        },
    },
    log: ['query', "info", "warn"],
    errorFormat: 'colorless',
});

export const prismaClient = baseClient.$extends(reactiveHooksExtension());

//inicializando banco
export async function initializeDb() {
    try {
        baseClient.$applyPendingMigrations();
    } catch (error) {
       console.log("Falha a aplicar migration: ", error);
       throw new Error('Erro ao inicializar o banco de dados');
    }
}