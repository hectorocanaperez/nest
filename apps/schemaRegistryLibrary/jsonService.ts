export interface JsonSchemaService{
    validate(schema: object,data:unknown): boolean;
}