import fs from "node:fs/promises";import path from "node:path";import crypto from "node:crypto";import {config} from "./config";
export interface StorageAdapter{save(buffer:Buffer,ext:string,folder:string):Promise<string>}
export class LocalStorageAdapter implements StorageAdapter{async save(buffer:Buffer,ext:string,folder:string){const name=crypto.randomUUID()+ext;const dir=path.join(config.uploadDir,folder);await fs.mkdir(dir,{recursive:true});await fs.writeFile(path.join(dir,name),buffer,{flag:"wx"});return "/uploads/"+folder+"/"+name}}
export const storage=new LocalStorageAdapter();