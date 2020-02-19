/**
 *    Copyright (c) 2019, Oracle and/or its affiliates. All rights reserved.
 *
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

import { EntryPoints } from "N/types";
import * as serverWidget from "N/ui/serverWidget";
import { Method } from 'N/http';

import { ValidateTSUEUsecase } from '../usecase/ValidateTSUEUsecase';
import { ValidateTSgateway } from '../gateway/ValidateTSgateway';

function _createUseCase() {
    return new ValidateTSUEUsecase({
        dependencies: {
        ValidateTSgateway: _createGateway(),
        },
    });
}

function _createGateway() {
    return new ValidateTSgateway({
        dependencies: {},
    });
}

export let onRequest: EntryPoints.Suitelet.onRequest = (context: EntryPoints.Suitelet.onRequestContext) => {
    const request = context.request;
    const response = context.response;
    const useCase = _createUseCase();
    const form = serverWidget.createForm({
        title: 'Suitelet Title',
    });

    if (request.method === Method.GET) {
        response.writePage(form);
    }
};
