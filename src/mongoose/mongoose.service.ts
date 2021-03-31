import { Inject, Injectable, Scope } from '@nestjs/common';
import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose';
import { REQUEST } from '@nestjs/core';
import { Request } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class MongooseConfigService implements MongooseOptionsFactory {
    constructor(
        @Inject(REQUEST) private readonly request: Request,) {
        console.log('constructor')
    }

    createMongooseOptions(): MongooseModuleOptions {
        console.log('createMongooseOptions')
        return {
            uri: this.request.url, // Change this to whatever you want; you have full access to the request object.
        };
    }
}
