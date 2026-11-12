"""Browser regression for historical Angular 8 lab (after building/serving)."""
import os
from playwright.sync_api import sync_playwright
BASE = os.getenv('BASE_URL','http://127.0.0.1:4554/AngularFrontEndMasters/')
with sync_playwright() as pw:
 b=pw.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
 for w in (390,1280):
  page=b.new_page(viewport={'width':w,'height':850},reduced_motion='reduce')
  errors=[]
  page.on('pageerror',lambda e: errors.append(str(e)))
  page.goto(BASE+'#/games',wait_until='domcontentloaded')
  page.locator('mat-list-item').first.wait_for(timeout=12000)
  page.locator('input[name=title]').fill('Demo smoke game')
  page.locator('textarea[name=description]').fill('A local fictional item')
  page.get_by_role('button',name='Save').click()
  item=page.locator('mat-list-item').filter(has_text='Demo smoke game')
  item.wait_for(timeout=10000)
  page.reload(wait_until='domcontentloaded')
  item=page.locator('mat-list-item').filter(has_text='Demo smoke game')
  item.wait_for(timeout=10000)
  item.locator('button').click()
  page.reload(wait_until='domcontentloaded')
  assert page.locator('mat-list-item').filter(has_text='Demo smoke game').count()==0
  assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),w
  assert not errors,errors
  print('ANGULAR_GAMES_PASS',w,flush=True)
  page.goto(BASE+'#/starwars/planets',wait_until='domcontentloaded')
  page.get_by_text('Planetas (60)').wait_for(timeout=35000)
  page.get_by_role('button',name='Carregar naves').click()
  page.get_by_text('Naves (36)').wait_for(timeout=35000)
  assert not errors,errors
  assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),w
  print('ANGULAR_SWAPI_PASS',w,flush=True)
  page.close()
 b.close()
