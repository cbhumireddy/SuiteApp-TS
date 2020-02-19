/**
 *    Copyright (c) 2019, Oracle and/or its affiliates. All rights reserved.
 *
 * @NAPIVersion 2.x
 * @NScriptType UserEventScript
 * @NModulescope SameAccount
 */

import {EntryPoints} from 'N/types';
import * as log from 'N/log';
import { ValidateTSUEUsecase } from '../usecase/ValidateTSUEUsecase';
import { ValidateTSgateway } from '../gateway/ValidateTSgateway';

let useCase: ValidateTSUEUsecase;

function getUseCase() {
if (useCase === null) {
    useCase = new ValidateTSUEUsecase({
        dependencies: {
            OrderGuideCSPopUpGateway: _createGateway(),
    },
    });
}
return useCase;
}

function _createGateway() {
return new ValidateTSgateway({
    dependencies: {},
});
}

/**
 * beforeSubmit
 * @param ctx
 */
export const beforeSubmit: EntryPoints.UserEvent.beforeSubmit = (ctx: EntryPoints.UserEvent.beforeSubmitContext): void => {
};

/**
 * beforeSubmit
 * @param ctx
 */
export const beforeLoad: EntryPoints.UserEvent.beforeLoad = (ctx: EntryPoints.UserEvent.beforeLoadContext): void => {
};

/**
 * beforeSubmit
 * @param ctx
 */
export const afterSubmit: EntryPoints.UserEvent.afterSubmit = (ctx: EntryPoints.UserEvent.afterSubmitContext): void => {
};
