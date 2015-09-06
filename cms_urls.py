import threading
from functools import wraps

def delay(time=0.0):
    """
    Decorator delaying the execution of a function for a while.
    """
    def wrap(f):
        @wraps(f)
        def delayed(*args, **kwargs):
            timer = threading.Timer(time, f, args=args, kwargs=kwargs)
            timer.start()
        return delayed
    return wrap

@delay(0.1)
def browser_sync_reload():
    from os import system
    system('browser-sync reload --port 8101')
    print 'Reload browser-sync on port 8101 ...'

browser_sync_reload()
