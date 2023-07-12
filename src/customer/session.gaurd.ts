import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common"; // this is a package

@Injectable() // injected all system with (nestjs)
export class SessionGuard implements CanActivate{
    canActivate( // it only use contract for guard
        cantext: ExecutionContext,// use for guard exicuted
        
    ): boolean {
        const request = cantext.switchToHttp().getRequest();
        return request.session.email !== undefined;
    }// session is an object and also define by email . 
}

// this session use only authentication purpose and active session protected by routes