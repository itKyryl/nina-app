import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { VersioningType } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api");

  app.enableVersioning({
    type: VersioningType.URI, // 👈 Enables /v1, /v2, etc.
  });

  const config = new DocumentBuilder()
    .setTitle("Public API")
    .setDescription("Public API for users with API-KEY")
    .setVersion("2.0")
    .addApiKey(
      {
        type: "apiKey",
        name: "Api-Key", // name of the header
        in: "header",
      },
      "ApiKeyAuth", // <- security name
    )
    .build();

  const publicDocument = SwaggerModule.createDocument(app, config, {
    include: [], // optionally, restrict to only public modules
    operationIdFactory: (controllerKey, methodKey) => methodKey,
    deepScanRoutes: true,
    ignoreGlobalPrefix: false,
    extraModels: [],
  });

  SwaggerModule.setup("api/docs/public", app, publicDocument); // Swagger UI will be available at /api/docs

  await app.listen(+(process.env.PORT ?? 5008));
}

bootstrap();
